import { prisma } from "@repo/database";
import { xAddBulk } from "@repo/redisstore/client";

async function main() {
  let websites = await prisma.website.findMany({
    select: {
      url: true,
      id: true,
    },
  });

  await xAddBulk(
    websites.map((w) => ({
      url: w.url,
      id: w.id,
    }))
  );
}

async function runLoop() {
  try {
    await main();
  } catch (err) {
    console.error("job failed", err);
  } finally {
    setTimeout(runLoop, 3 * 60 * 1000);
  }
}

runLoop();
