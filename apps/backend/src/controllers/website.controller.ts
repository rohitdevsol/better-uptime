import type { Request, Response } from "express";
import { UnauthorizedError } from "@/responses/errors/UnauthorizedError";
import { createWebsite } from "@/services/website.service";
import success from "@/responses/success";

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
