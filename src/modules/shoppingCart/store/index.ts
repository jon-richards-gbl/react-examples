import { createSlice } from "@reduxjs/toolkit";

import {
  setDataPending,
  setDataRejected,
  setDataResult,
} from "~/lib/helpers/store";
import {
  addToCart,
  fetchCart,
  removeFromCart,
} from "~/shoppingCart/store/actions";

import { createInitialShoppingCartState } from "./state";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: createInitialShoppingCartState(),
  reducers: {},
  extraReducers: (builder) => {
    // addToCart
    builder.addCase(addToCart.pending, (state) => {
      state.items = setDataPending(state.items);
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.items = setDataResult(action.payload);
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.items = setDataRejected(state.items, action.error);
    });

    // removeFromCart
    builder.addCase(removeFromCart.pending, (state) => {
      state.items = setDataPending(state.items);
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.items = setDataResult(action.payload);
    });
    builder.addCase(removeFromCart.rejected, (state, action) => {
      state.items = setDataRejected(state.items, action.error);
    });

    // fetch cart
    builder.addCase(fetchCart.pending, (state) => {
      state.items = setDataPending(state.items);
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.items = setDataResult(action.payload);
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.items = setDataRejected(state.items, action.error);
    });
  },
});

export default shoppingCartSlice.reducer;
