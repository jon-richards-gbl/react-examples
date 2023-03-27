import { createAsyncThunk } from "@reduxjs/toolkit";

import { slugify } from "../../../lib/helpers/util";
import { productService } from "../services/productService";
import { Category } from "../types/products";

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    const categoryNames = await productService.getCategories();
    const categoryEntries: [string, Category][] = categoryNames.map(
      (categoryName) => {
        const url = slugify(categoryName);

        return [url, { name: categoryName, url, products: [] }];
      }
    );

    return Object.fromEntries(categoryEntries);
  }
);

export const fetchItemsByCategory = createAsyncThunk(
  "products/fetchItemsByCategory",
  async (categoryName: string): Promise<Category> => ({
    name: categoryName,
    url: slugify(categoryName),
    products: await productService.getItemsByCategory(categoryName),
  })
);

export const fetchItemById = createAsyncThunk(
  "products/fetchItemById",
  async (id: string) => {
    return productService.getItemById(id);
  }
);
