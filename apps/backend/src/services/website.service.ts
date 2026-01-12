import { prisma } from "@repo/database";

type CreateWebsiteInput = {
  url: string;
  userId: string;
};

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
