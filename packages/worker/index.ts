import { HealthStatus, prisma } from "@repo/database";
import {
  ensureConsumerGroup,
  xAckBulk,
  xReadGroup,
} from "@repo/redisstore/client";
import axios from "axios";
import http from "http";
import https from "https";

const MAX_CONCURRENCY = 10;
const REGION_ID = process.env.REGION_ID!;
const WORKER_ID = process.env.WORKER_ID!;

const BATCH_SIZE = 100;
const FLUSH_INTERVAL_MS = 2000;

type TickInsert = {
  websiteId: string;
  regionId: string;
  status: HealthStatus;
  ping: number;
};

let tickBuffer: TickInsert[] = [];
let ackBuffer: string[] = [];
let lastFlushAt = Date.now();

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

const httpClient = axios.create({
  timeout: 5000,
  validateStatus: () => true,
  httpAgent,
  httpsAgent,
});

async function processWithLimit<T>(
  items: T[],
  handler: (item: T) => Promise<void>
) {
  const executing = new Set<Promise<void>>();

  for (const item of items) {
    const p = handler(item).finally(() => executing.delete(p));
    executing.add(p);

    if (executing.size >= MAX_CONCURRENCY) {
      await Promise.race(executing);
    }
  }

  await Promise.all(executing);
}

async function workerLoop() {
  await ensureConsumerGroup(REGION_ID);

  while (true) {
    const messages = await xReadGroup(REGION_ID, WORKER_ID);
    const now = Date.now();

    // No messages → flush pending buffer
    if (messages.length === 0) {
      if (tickBuffer.length > 0) {
        await flushBuffers();
      }
      continue;
    }

    // Process with bounded concurrency
    await processWithLimit(messages, ({ id, message }) =>
      fetchWebsite(message.url, message.id, id)
    );

    // Flush on size OR time
    if (
      tickBuffer.length >= BATCH_SIZE ||
      now - lastFlushAt >= FLUSH_INTERVAL_MS
    ) {
      await flushBuffers();
    }
  }
}

async function fetchWebsite(url: string, websiteId: string, messageId: string) {
  const startTime = Date.now();

  try {
    await httpClient.get(url);

    tickBuffer.push({
      websiteId,
      regionId: REGION_ID,
      status: "UP",
      ping: Date.now() - startTime,
    });
  } catch {
    tickBuffer.push({
      websiteId,
      regionId: REGION_ID,
      status: "DOWN",
      ping: Date.now() - startTime,
    });
  }

  ackBuffer.push(messageId);
}

async function flushBuffers() {
  if (tickBuffer.length === 0) return;

  const ticks = tickBuffer;
  const ackIds = ackBuffer;

  tickBuffer = [];
  ackBuffer = [];
  lastFlushAt = Date.now();

  await prisma.websiteTick.createMany({
    data: ticks,
  });

  await xAckBulk(REGION_ID, ackIds);
}

async function validateRegionAndStart() {
  const region = await prisma.region.findUnique({
    where: { id: REGION_ID },
  });

  if (!region) {
    throw new Error(`Invalid REGION_ID: ${REGION_ID}`);
  }

  console.log(`Worker ${WORKER_ID} started for region ${REGION_ID}`);
  await workerLoop();
}

validateRegionAndStart().catch((err) => {
  console.error("Worker failed to start", err);
  process.exit(1);
});
