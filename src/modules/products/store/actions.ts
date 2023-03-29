import { createAsyncThunk } from "@reduxjs/toolkit";

import { productService } from "../services/productService";
import { Category } from "../types/products";

export const fetchCategoryNames = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    return productService.getCategories();
  }
);

export const fetchItemsByCategory = createAsyncThunk(
  "products/fetchItemsByCategory",
  async (categoryName: string): Promise<Category> => {
    return {
      name: categoryName,
      products: await productService.getItemsByCategory(categoryName),
    };
  }
);

export const fetchItemById = createAsyncThunk(
  "products/fetchItemById",
  async (id: string) => {
    return productService.getItemById(id);
  }
);
