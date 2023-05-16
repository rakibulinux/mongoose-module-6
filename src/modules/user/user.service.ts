import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  console.log(user.fullName());
  await user.save();
  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = User.find();
  return users;
};

export const getSingleUserFromDB = (payload: string): Promise<IUser | null> => {
  const user = User.findOne({ id: payload });
  return user;
};

export const getAdminUsersFromDB = async () => {
  const admin = await User.getAdminUsers();
  console.log(admin);
  return admin;
};
