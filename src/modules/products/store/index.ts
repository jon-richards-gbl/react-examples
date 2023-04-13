import { createSlice } from "@reduxjs/toolkit";

import {
  setDataPending,
  setDataRejected,
  setDataResult,
  setDataResultNormalized,
} from "~/lib/helpers/store";

import {
  fetchCategoryByName,
  fetchCategoryNames,
  fetchProductById,
} from "./actions";
import { createInitialProductsState } from "./state";

const productsSlice = createSlice({
  name: "products",
  initialState: createInitialProductsState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryNames.pending, (state) => {
      state.categoryNames = setDataPending(state.categoryNames);
    });
    builder.addCase(fetchCategoryNames.fulfilled, (state, action) => {
      state.categoryNames = setDataResult(action.payload);
    });
    builder.addCase(fetchCategoryNames.rejected, (state, action) => {
      state.categoryNames = setDataRejected(state.categoryNames, action.error);
    });

    builder.addCase(fetchCategoryByName.pending, (state) => {
      state.categories = setDataPending(state.categories);
    });
    builder.addCase(fetchCategoryByName.fulfilled, (state, action) => {
      state.categories = setDataResultNormalized(
        state.categories,
        [action.payload],
        "name"
      );
    });
    builder.addCase(fetchCategoryByName.rejected, (state, action) => {
      state.categories = setDataRejected(state.categories, action.error);
    });

    builder.addCase(fetchProductById.pending, (state) => {
      state.products = setDataPending(state.products);
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.products = setDataResultNormalized(
        state.products,
        [action.payload],
        "id"
      );
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.products = setDataRejected(state.products, action.error);
    });
  },
});

export default productsSlice.reducer;
