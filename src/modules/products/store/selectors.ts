import { createSelector } from "@reduxjs/toolkit";

import { AppState } from "~/lib/types/store";

const selectProductsState = (state: AppState) => state.products;

export const selectCategoryByName = (name: string) =>
  createSelector(selectProductsState, (products) => {
    const { data, isLoading } = products.categories;

    return {
      isLoading,
      category: data[name],
    };
  });

export const selectProductById = (id: string) =>
  createSelector(selectProductsState, (products) => {
    const { data, isLoading } = products.products;

    return {
      isLoading,
      product: data[id],
    };
  });

export const selectCategoryNames = createSelector(
  selectProductsState,
  (products) => {
    return products.categoryNames;
  }
);
