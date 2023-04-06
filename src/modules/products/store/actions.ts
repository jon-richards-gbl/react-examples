import { createAsyncThunk } from "@reduxjs/toolkit";

import { productService_OLD } from "../services/productService";
import { Category } from "../types/products";

export const fetchCategoryNames = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    return productService_OLD.getCategories();
  }
);

export const fetchItemsByCategory = createAsyncThunk(
  "products/fetchItemsByCategory",
  async (categoryName: string): Promise<Category> => {
    return {
      name: categoryName,
      products: await productService_OLD.getItemsByCategory(categoryName),
    };
  }
);

export const fetchItemById = createAsyncThunk(
  "products/fetchItemById",
  async (id: string) => {
    return productService_OLD.getItemById(id);
  }
);
