import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Model, Schema, model } from "mongoose";
import userRouter from "./modules/user/user.route";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/v1/user", userRouter);

export default app;
