import { createAsyncThunk } from "@reduxjs/toolkit";

import { productService } from "../services/productService";

export const fetchCategoryNames = createAsyncThunk(
  "products/fetchCategories",
  () => productService.getCategories()
);

export const fetchCategoryByName = createAsyncThunk(
  "products/fetchCategoryByName",
  (categoryName: string) => productService.getCategoryByName(categoryName)
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  (id: string) => productService.getProductById(id)
);
