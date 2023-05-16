import { NextFunction, Request, Response } from "express";
import {
  createUserToDB,
  getAdminUsersFromDB,
  getSingleUserFromDB,
  getUsersFromDB,
} from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDB(data);
  res.status(200).json({
    status: "Success",
    data: user,
  });
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getUsersFromDB();
  res.status(200).json({
    status: "Status",
    data: users,
  });
};

export const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = await getSingleUserFromDB(id);
  res.status(200).json({
    status: "Success",
    data: user,
  });
};
export const getAdminUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getAdminUsersFromDB();
  res.status(200).json({
    status: "Success",
    data: user,
  });
};
