import { createSelector } from "@reduxjs/toolkit";

import { shoppingCartApi } from "~/shoppingCart/services/shoppingCartService";

export const selectCartItems = shoppingCartApi.endpoints.fetchCart.select();

export const selectItemIsInCart = (id: number) =>
  createSelector(selectCartItems, (cartItems) => {
    return cartItems.data?.some((item) => item.id === id);
  });
