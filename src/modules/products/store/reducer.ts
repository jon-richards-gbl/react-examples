import { createSlice } from "@reduxjs/toolkit";

import { ProductsState } from "../types/products";
import {
  fetchCategories,
  fetchItemById,
  fetchItemsByCategory,
} from "./actions";

const createInitialProductsState = (): ProductsState => ({
  isLoading: false,
  categories: {},
  products: {},
});

const productsSlice = createSlice({
  name: "products",
  initialState: createInitialProductsState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    });

    builder.addCase(fetchItemsByCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchItemsByCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories[action.payload.url] = action.payload;
    });

    builder.addCase(fetchItemById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchItemById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products[action.payload.id] = action.payload;
    });
  },
});

export default productsSlice.reducer;
