import { createSelector } from "@reduxjs/toolkit";

// import type { AppState } from "~/lib/types/store";
import { shoppingCartApi } from "~/shoppingCart/services/shoppingCartService";

// export const selectCartItems = (state: AppState) => state.shoppingCart.items;
export const selectCartItems = shoppingCartApi.endpoints.fetchCart.select();

export const selectItemIsInCart = (id: number) =>
  createSelector(selectCartItems, (cartItems) => {
    return cartItems.data?.some((item) => item.id === id);
  });
