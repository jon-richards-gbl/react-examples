// import { AppDispatchWithThunk } from "~/lib/types/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { ProductStub } from "~/products/types/products";

// import { updateCardResolved, updateCartPending } from ".";
import { shoppingCartService } from "../services/shoppingCartService";

// export function addToCart(item: ProductStub): AppDispatchWithThunk {
//   return async (dispatch) => {
//     dispatch(updateCartPending());
//
//     const res = await shoppingCartService.putToCart(item);
//
//     dispatch(updateCardResolved(res));
//   };
// }

export const addToCart = createAsyncThunk(
  "shoppingCart/addToCart",
  (item: ProductStub) => shoppingCartService.putToCart(item)
);

// export function removeFromCart(item: ProductStub): AppDispatchWithThunk {
//   return async (dispatch) => {
//     dispatch(updateCartPending());
//
//     const res = await shoppingCartService.removeFromCart(item);
//
//     dispatch(updateCardResolved(res));
//   };
// }

export const removeFromCart = createAsyncThunk(
  "shoppingCart/removeFromCart",
  (item: ProductStub) => shoppingCartService.removeFromCart(item)
);

// export function fetchCart(): AppDispatchWithThunk {
//   return async (dispatch) => {
//     dispatch(updateCartPending());
//
//     const res = await shoppingCartService.fetchCart();
//
//     dispatch(updateCardResolved(res));
//   };
// }

export const fetchCart = createAsyncThunk("shoppingCart/fetchCart", () =>
  shoppingCartService.fetchCart()
);
