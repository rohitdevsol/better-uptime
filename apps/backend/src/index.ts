import "dotenv/config";
import express from "express";
import morgan from "morgan";
// import "express-async-errors";
import { errorHandler } from "@/middlewares/error.middleware";
import { v1Router } from "@/routers/v1";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const app = express();
app.use(morgan("dev"));

app.use("/api/v1", v1Router);

app.use(express.json());

app.use(errorHandler);
export { app };
