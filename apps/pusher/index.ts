import { prisma } from "@repo/database";
setInterval(() => {
  async function getWebsites() {
    //fetch the website every one minute
    const websites = await prisma.website.findMany({
      where: {
        deletedAt: null,
      },
      select: {
        id: true,
        url: true,
      },
    });
  }

  getWebsites();
}, 60 * 1000);
