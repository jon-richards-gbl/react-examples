import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../../lib/types/store";

const selectProductsState = (state: RootState) => state.products;

export const selectCategories = createSelector(
  selectProductsState,
  (products) => Object.values(products.categories)
);

export const selectCategoryBySlug = (slug: string | undefined) =>
  createSelector(selectProductsState, (products) =>
    slug ? products.categories[slug] : null
  );

export const selectProductById = (id: string | undefined) =>
  createSelector(selectProductsState, (products) =>
    id ? products.products[id] : null
  );
