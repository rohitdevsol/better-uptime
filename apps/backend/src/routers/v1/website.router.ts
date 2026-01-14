import express from "express";
import { authMiddleware } from "@/middlewares/auth.middleware";
import { validateWebsiteBody } from "@/middlewares/validation/website.validation";
import {
  createWebsiteController,
  getAllWebsitesController,
  getWebisteHistoryController,
  getWebsitesForPusher,
} from "@/controllers/website.controller";

export const websiteRouter = express.Router();

websiteRouter.use(authMiddleware);

websiteRouter.post("/", validateWebsiteBody, createWebsiteController);

websiteRouter.get("/all/:cursor/:take", getAllWebsitesController);

websiteRouter.get("/history/:websiteId/:regionId", getWebisteHistoryController);

websiteRouter.get("/pusher", getWebsitesForPusher);
