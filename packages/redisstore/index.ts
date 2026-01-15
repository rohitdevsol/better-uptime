import { createClient, type RedisClientType } from "redis";

type WebsiteEvent = {
  url: string;
  id: string;
};

export type StreamMessage = {
  id: string;
  message: WebsiteEvent;
};

const STREAM_NAME = "betteruptime:website";

let client: RedisClientType | null = null;

async function getRedis(): Promise<RedisClientType> {
  if (client) return client;

  client = createClient();
  client.on("error", console.error);

  await client.connect();
  return client;
}

export async function ensureConsumerGroup(
  consumerGroup: string
): Promise<void> {
  const redis = await getRedis();

  try {
    await redis.xGroupCreate(STREAM_NAME, consumerGroup, "0", {
      MKSTREAM: true,
    });
  } catch (err: any) {
    if (!err?.message?.includes("BUSYGROUP")) {
      throw err;
    }
  }
}

export async function xReadGroup(
  consumerGroup: string,
  workerId: string,
  count = 5,
  blockMs = 5000
): Promise<StreamMessage[]> {
  const redis = await getRedis();

  const res = await redis.xReadGroup(
    consumerGroup,
    workerId,
    { key: STREAM_NAME, id: ">" },
    { COUNT: count }
  );

  //block time can be added above in 55 line
  if (!res || res.length === 0) return [];
  return res[0]?.messages as StreamMessage[];
}

export async function xAddBulk(events: WebsiteEvent[]): Promise<void> {
  if (events.length === 0) return;

  const redis = await getRedis();
  const multi = redis.multi();

  for (const event of events) {
    multi.xAdd(STREAM_NAME, "*", event);
  }

  await multi.exec();
}

export async function xAckBulk(
  consumerGroup: string,
  messageIds: string[]
): Promise<void> {
  if (messageIds.length === 0) return;

  const redis = await getRedis();
  await redis.xAck(STREAM_NAME, consumerGroup, messageIds);
}
