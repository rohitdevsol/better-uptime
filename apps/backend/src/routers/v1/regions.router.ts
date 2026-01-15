import {
  createRegionController,
  getRegionController,
} from "@/controllers/region.controller";
import express from "express";

export const regionRouter = express.Router();

regionRouter.post("/", createRegionController);

regionRouter.get("/:regionId", getRegionController);
