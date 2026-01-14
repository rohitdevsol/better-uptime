-- DropIndex
DROP INDEX "WebsiteTick_websiteId_regionId_key";

-- CreateIndex
CREATE INDEX "WebsiteTick_websiteId_regionId_createdAt_idx" ON "WebsiteTick"("websiteId", "regionId", "createdAt");
