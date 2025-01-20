const mongoose = require("mongoose");

export const FOOD_CATEGORY_SCHEMA = new mongoose.Schema(
  {
    categoryName: String,
  },
  {
    Timestamp: true,
  }
);
export const FoodCategoryModel = mongoose.model(
  "FoodCategory",
  FOOD_CATEGORY_SCHEMA,
  "food-category"
);
