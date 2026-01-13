/*
  Warnings:

  - You are about to drop the `WebsiteRegion` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[url]` on the table `Website` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "WebsiteRegion" DROP CONSTRAINT "WebsiteRegion_regionId_fkey";

-- DropForeignKey
ALTER TABLE "WebsiteRegion" DROP CONSTRAINT "WebsiteRegion_websiteId_fkey";

-- DropTable
DROP TABLE "WebsiteRegion";

-- CreateTable
CREATE TABLE "WebsiteTick" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "id" TEXT NOT NULL,
    "websiteId" TEXT NOT NULL,
    "regionId" TEXT NOT NULL,
    "status" "HealthStatus" NOT NULL,
    "ping" INTEGER,

    CONSTRAINT "WebsiteTick_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WebsiteTick_websiteId_regionId_key" ON "WebsiteTick"("websiteId", "regionId");

-- CreateIndex
CREATE UNIQUE INDEX "Website_url_key" ON "Website"("url");

-- AddForeignKey
ALTER TABLE "WebsiteTick" ADD CONSTRAINT "WebsiteTick_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteTick" ADD CONSTRAINT "WebsiteTick_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
