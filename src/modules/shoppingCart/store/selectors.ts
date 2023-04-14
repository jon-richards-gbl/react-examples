import { createSelector } from "@reduxjs/toolkit";

import type { AppState } from "~/lib/types/store";

export const selectCartItems = (state: AppState) => state.shoppingCart.items;

export const selectItemIsInCart = (id: number) =>
  createSelector(selectCartItems, (cartItems) => {
    return cartItems.data.some((item) => item.id === id);
  });
