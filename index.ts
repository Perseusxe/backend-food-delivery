import { config, configDotenv } from "dotenv";
import express, { Request, Response } from "express";
import { MongoClient, ObjectId, Timestamp } from "mongodb";
import { FoodCategoryRouter } from "./router/food-category";
import { FoodsRouter } from "./router/food";

const PORT = 5000;
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());
configDotenv();

const connectMongoDB = async () => {
  const MONGODB_URI: any = process.env.MONGODB_URI;
  await mongoose.connect(MONGODB_URI);
};
connectMongoDB();

app.use("/food-category", cors(), FoodCategoryRouter);
app.use("/food", FoodsRouter);

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
