import prisma from "@repo/database";

export async function createRegion(name: string) {
  return prisma.region.create({
    data: {
      name,
    },
  });
}

export async function getRegion(id: string) {
  return prisma.region.findUnique({
    where: {
      id,
    },
  });
}
