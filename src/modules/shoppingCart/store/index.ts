import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import uniqBy from "lodash/uniqBy";

import type { ProductStub } from "~/products/types/products";

import { createInitialShoppingCartState } from "./state";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: createInitialShoppingCartState(),
  reducers: {
    addToCart(state, action: PayloadAction<ProductStub>) {
      state.items = uniqBy([...state.items, action.payload], "id");
    },
    removeFromCart(state, action: PayloadAction<ProductStub>) {
      state.items = [
        ...state.items.filter((item) => item.id !== action.payload.id),
      ];
    },
  },
});

export const { addToCart, removeFromCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
