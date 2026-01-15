import express from "express";
import { websiteRouter } from "@/routers/v1/website.router";
import { regionRouter } from "./regions.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "@/lib/auth";

export const v1Router = express.Router();

v1Router.use("/auth", toNodeHandler(auth));

v1Router.use("/website", websiteRouter);
v1Router.use("/region", regionRouter);
