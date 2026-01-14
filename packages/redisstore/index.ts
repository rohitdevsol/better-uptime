import { createClient } from "redis";

const client = await createClient()
  .on("error", (err) => console.log("Redis client error", err))
  .connect();

type WebsiteEvent = {
  url: string;
  id: string;
};

async function xAdd({ url, id }: WebsiteEvent) {
  await client.xAdd("betteruptime:website", "*", {
    url,
    id,
  });
}

// export async function xAck() {
//   await client.xAck("betteruptime:website", "");
// }
export async function xAddBulk(websites: WebsiteEvent[]) {
  websites.forEach(async (x) => {
    await xAdd({
      url: x.url,
      id: x.id,
    });
  });
}
