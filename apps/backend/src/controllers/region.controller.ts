import type { Request, Response } from "express";
import { UnauthorizedError } from "@/responses/errors/UnauthorizedError";
import success from "@/responses/success";
import { createRegion, getRegion } from "@/services/region.service";
import { BadRequestError } from "@/responses/errors/BadRequestError";

export async function createRegionController(req: Request, res: Response) {
  const userId = req.user?.userId;
  if (!userId) {
    throw new UnauthorizedError();
  }
  const { region_name } = req.body;
  const region = await createRegion(region_name);

  success(res, region);
}

export async function getRegionController(req: Request, res: Response) {
  const userId = req.user?.userId;
  if (!userId) {
    throw new UnauthorizedError();
  }
  const regionId = req.params.regionId as string;
  if (!regionId) {
    throw new BadRequestError("Region id is missing");
  }
  const region = await getRegion(regionId);
  success(res, region);
}
