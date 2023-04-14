import {
  /*PayloadAction, */
  createSlice,
} from "@reduxjs/toolkit";

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

// import uniqBy from "lodash/uniqBy";
// import type { ProductStub } from "~/products/types/products";
import { createInitialShoppingCartState } from "./state";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: createInitialShoppingCartState(),
  reducers: {
    // updateCartPending(state) {
    //   state.isLoading = true;
    // },
    // updateCardResolved(state, action: PayloadAction<ProductStub[]>) {
    //   state.isLoading = false;
    //   state.items = action.payload;
    // },
  },
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

// export const { updateCartPending, updateCardResolved } =
//   shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
