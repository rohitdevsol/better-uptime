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

setInterval(
  () => {
    main();
  },
  3 * 1000 * 60
);

main();
