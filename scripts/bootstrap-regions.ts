import prisma from "@repo/database";
import { ensureConsumerGroup } from "@repo/redisstore/client";

async function bootstrapRegions() {
  const regions = await prisma.region.findMany({
    select: { id: true },
  });

  for (const { id } of regions) {
    await ensureConsumerGroup(id);
    console.log(`Ensured consumer group for region ${id}`);
  }

  console.log("Region bootstrap complete");
}

bootstrapRegions()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Bootstrap failed", err);
    process.exit(1);
  });
