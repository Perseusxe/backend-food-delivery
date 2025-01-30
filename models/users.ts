import { ObjectId } from "mongodb";

const mongoose = require("mongoose");
// const UserRoleEnum = new mongoose.Schema({
//   USER: {

//   };
export const USER_SCHEMA = new mongoose.Schema({
  email: String,
  password: String,
  phoneNumber: String,
  address: String,
  //   role: UserRoleEnum,
  orderedFoods: ObjectId,
  ttl: Date,
  isVerified: Boolean,
  createdAt: Date,
  updatedAt: Date,
});
export const UserModel =
  mongoose.models["Users"] || mongoose.model("User", USER_SCHEMA, "users");