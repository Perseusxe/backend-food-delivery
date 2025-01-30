import express, { Request, Response, Router } from "express";
import { FoodOrderModel } from "../models/food-order";
import { verifyToken } from "@clerk/backend";
export const FoodOrderRouter = express.Router();
export type CustomRequest = Request & {
  userId?: string;
};

const auth = async (req: any, res: any, next: any) => {
  const token = req.get("authentication");
  try {
    const verified = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
    });
    next();
    req.userId = verified.sub;
  } catch {
    res.json({ status: "not accessible" });
  }
};
// FoodOrderRouter.get("/", auth, async (req: CustomRequest, res: Response) => {
//   const user = req?.userId;
//   console.log({ user });
//   const { FoodOrderItems, totalPrice } = req.body;
//   const order = { user, FoodOrderItems, totalPrice };
//   const newOrder = await FoodOrderModel.create(order);
//   res.json(newOrder);
// });

FoodOrderRouter.post("/", auth, async (req: CustomRequest, res: Response) => {
  const user = req?.userId;
  console.log({ user });
  const { FoodOrderItems, totalPrice } = req.body;
  const order = { user, FoodOrderItems, totalPrice };
  const newOrder = await FoodOrderModel.create(order);
  res.json(newOrder);
});