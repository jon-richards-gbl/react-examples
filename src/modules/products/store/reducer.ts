import { createSlice } from "@reduxjs/toolkit";

import { ProductsState } from "../types/products";
import {
  fetchCategoryNames,
  fetchItemById,
  fetchItemsByCategory,
} from "./actions";

const createInitialProductsState = (): ProductsState => ({
  isLoading: false,
  categories: {},
  categoryNames: [],
  products: {},
});

const productsSlice = createSlice({
  name: "products",
  initialState: createInitialProductsState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryNames.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategoryNames.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categoryNames = action.payload;
    });

    builder.addCase(fetchItemsByCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchItemsByCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories[action.payload.name] = action.payload;
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
