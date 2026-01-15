import prisma, { type WebsiteTick } from "@repo/database";

type CreateWebsiteInput = {
  url: string;
  userId: string;
};

type GetWebsiteTickHistoryInput = {
  websiteId: string;
  userId: string;
  regionId?: string;
  from?: Date;
  to?: Date;
};

function computeWebsiteStatus(ticks: WebsiteTick[]) {
  if (ticks.length === 0) return "UNKNOWN";
  return ticks.some((t) => t.status === "UP") ? "UP" : "DOWN";
}

export async function createWebsite({ url, userId }: CreateWebsiteInput) {
  return prisma.website.create({
    data: {
      url,
      users: {
        create: {
          userId,
        },
      },
    },
  });
}

export async function getWebsites({
  userId,
  cursor,
  take = 10,
}: {
  userId: string;
  cursor?: string;
  take?: number;
}) {
  const websites = await prisma.website.findMany({
    take,
    skip: cursor ? 1 : 0,
    cursor: cursor ? { id: cursor } : undefined,
    where: {
      deletedAt: null,
      users: {
        some: {
          userId,
          deletedAt: null,
        },
      },
    },
    orderBy: { createdAt: "desc" },
    include: {
      regions: {
        where: { deletedAt: null },
        orderBy: { createdAt: "desc" },
        take: 1,
        include: { region: true },
      },
    },
  });

  return {
    data: websites.map((w) => ({
      ...w,
      status: computeWebsiteStatus(w.regions),
    })),
    nextCursor: websites.at(-1)?.id ?? null,
  };
}

export async function getWebsiteTickHistory({
  websiteId,
  userId,
  regionId,
  from,
  to,
}: GetWebsiteTickHistoryInput) {
  return prisma.websiteTick.findMany({
    where: {
      deletedAt: null,

      website: {
        id: websiteId,
        deletedAt: null,
        users: {
          some: {
            userId,
            deletedAt: null,
          },
        },
      },

      ...(regionId && { regionId }),

      ...(from || to
        ? {
            createdAt: {
              ...(from && { gte: from }),
              ...(to && { lte: to }),
            },
          }
        : {}),
    },

    include: {
      region: true,
    },

    orderBy: {
      createdAt: "asc",
    },
  });
}

export async function getActiveWebsitesForPusher() {
  return prisma.website.findMany({
    where: {
      deletedAt: null,
    },
    select: {
      id: true,
      url: true,
    },
  });
}
