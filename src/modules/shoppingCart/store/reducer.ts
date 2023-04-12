import { createReducer } from "@reduxjs/toolkit";
import uniqBy from "lodash/uniqBy";

import { addToCart, removeFromCart } from "./actions";
import { createInitialShoppingCartState } from "./state";

const initialState = createInitialShoppingCartState();

const shoppingCartReducer = createReducer(
  initialState,
  (builder) => {
    builder.addCase(addToCart, (state, action) => ({
      ...state,
      items: uniqBy([...state.items, action.payload], "id"),
    }));

    builder.addCase(removeFromCart, (state, action) => ({
      ...state,
      items: [...state.items.filter((item) => item.id !== action.payload.id)],
    }));
  }
);

export default shoppingCartReducer;
