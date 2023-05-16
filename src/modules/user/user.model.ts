import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    fristname: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  dateOfBirth: { type: String },
  gender: { type: String, enum: ["male", "female"] },
  email: { type: String },
  contactNo: { type: String, required: true },
  emargencyContactNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
});

userSchema.method("fullName", function fullName() {
  return this.name.fristname + " " + this.name.lastName;
});

userSchema.static("getAdminUsers", async function getAdminUsers() {
  const admin = await this.find({ role: "admin" });
  console.log(admin);
  return admin;
});

const User = model<IUser, UserModel>("user", userSchema);

export default User;
