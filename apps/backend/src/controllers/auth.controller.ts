// import success from "@/responses/success";
// import { createUser, loginUser } from "@/services/auth.service";
// import type { Request, Response } from "express";

// export async function signUpController(req: Request, res: Response) {
//   const { username, password } = req.body;

//   const user = await createUser(username, password);

//   success(res, user);
// }

// export async function loginController(req: Request, res: Response) {
//   const { username, password } = req.body;
//   const userId = req.user?.userId!;

//   const result = await loginUser(userId, username, password);

//   success(res, result);
// }
