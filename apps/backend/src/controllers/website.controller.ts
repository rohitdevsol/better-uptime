import type { Request, Response } from "express";
import { UnauthorizedError } from "@/responses/errors/UnauthorizedError";
import {
  createWebsite,
  getActiveWebsitesForPusher,
  getWebsites,
  getWebsiteTickHistory,
} from "@/services/website.service";
import success from "@/responses/success";
import { NotFoundError } from "@/responses/errors/NotFoundError";
import { BadRequestError } from "@/responses/errors/BadRequestError";

export async function createWebsiteController(req: Request, res: Response) {
  const userId = req.user?.userId;
  if (!userId) {
    throw new UnauthorizedError();
  }
  const { url } = req.body;
  const website = await createWebsite({
    url,
    userId,
  });

  success(res, website);
}

export async function getAllWebsitesController(req: Request, res: Response) {
  const userId = req.user?.userId;
  if (!userId) {
    throw new UnauthorizedError();
  }
  const cursor = req.query.cursor as string;
  const take = parseInt(req.query.take as string) ?? 10;

  if (!cursor) {
    throw new BadRequestError("Cursor is missing");
  }

  const websites = await getWebsites({ userId, cursor, take });

  success(res, websites);
}

export async function getWebisteHistoryController(req: Request, res: Response) {
  const userId = req.user?.userId;
  if (!userId) {
    throw new UnauthorizedError();
  }

  const websiteId = req.params.websiteId as string;
  const regionId = req.params.regionId as string;
  if (!websiteId) {
    throw new BadRequestError("Website id is missing");
  }

  const { from, to } = req.body;

  const history = await getWebsiteTickHistory({
    websiteId,
    userId,
    regionId,
    from,
    to,
  });

  success(res, history);
}

export async function getWebsitesForPusher(req: Request, res: Response) {
  const websites = await getActiveWebsitesForPusher();
  success(res, websites);
}
