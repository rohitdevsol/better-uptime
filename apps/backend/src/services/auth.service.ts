// import { BadRequestError } from "@/responses/errors/BadRequestError";
// import { NotFoundError } from "@/responses/errors/NotFoundError";
// import jwt from "jsonwebtoken";
// import prisma from "@repo/database";
// import bcrypt from "bcrypt";

// export async function createUser(email: string, password: string) {
//   if (!email || !password) {
//     throw new BadRequestError("Missing fields");
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);

//   return prisma.user.create({
//     data: {
//       email,
//       password: hashedPassword,
//     },
//   });
// }

// export async function loginUser(
//   userId: string,
//   username: string,
//   password: string
// ) {
//   if (!username || !password || !userId) {
//     throw new BadRequestError("Missing fields");
//   }

//   const user = await prisma.user.findUnique({
//     where: { id: userId },
//   });

//   if (!user) {
//     throw new NotFoundError("User does not exist");
//   }

//   const isValid = await bcrypt.compare(password, user.password);
//   if (!isValid) {
//     throw new BadRequestError("Password does not match");
//   }

//   const token = jwt.sign(
//     {
//       userId: user.id,
//       username: user.email,
//     },
//     process.env.JWT_SECRET!
//   );

//   return {
//     message: "Login success",
//     token,
//   };
// }
