import express, { Request, Response, Router } from "express";
import { FoodModel } from "../models/foods";

export const FoodsRouter = express.Router();
FoodsRouter.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const Foods = await FoodModel.find({
    category: id,
  });
  res.json(Foods);
});
FoodsRouter.get("/", async (req: Request, res: Response) => {
  const filter = req.query?.category ? { category: req.query.category } : {};
  const FoodCategories = await FoodModel.find(filter);
  res.json(FoodCategories);
});
FoodsRouter.post("/", async (req: Request, res: Response) => {
  const { foodName, price, image, ingredients, category } = req.body;
  try {
    const foodModel = await FoodModel.create({
      foodName,
      price,
      image,
      ingredients,
      category,
    });
    res.json(foodModel);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
  FoodsRouter.put("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;  
    const { foodName } = req.body;
    const updatedCategory = await FoodModel.findByIdAndUpdate(
      id,
      { foodName },
      { new: true }
    );
    res.json(updatedCategory);
  });
  FoodsRouter.delete(
    "/food/:id",
    async (req: Request, res: Response) => {
      const { id } = req.params;
      await FoodModel.findByIdAndDelete(id);
      res.send(id);
    }
  );
});
