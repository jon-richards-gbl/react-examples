import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../../lib/types/store";

const selectProductsState = (state: RootState) => state.products;

export const selectCategoryNames = createSelector(
  selectProductsState,
  (products) => products.categoryNames
);

export const selectCategoryBySlug = (slug: string | undefined) =>
  createSelector(selectProductsState, (products) => {
    if (!slug || !products.categoryNames.includes(slug)) {
      return null;
    }

    return products.categories[slug];
  });

export const selectProductById = (id: string | undefined) =>
  createSelector(selectProductsState, (products) =>
    id ? products.products[id] : null
  );

export const selectIsProductsLoading = createSelector(
  selectProductsState,
  (products) => products.isLoading
);
