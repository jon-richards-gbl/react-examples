import { configureStore } from "@reduxjs/toolkit";

import authReducer from "~/auth/store";
import productReducer from "~/products/store";
import shoppingCartReducer from "~/shoppingCart/store/reducer";

export const createStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      products: productReducer,
      shoppingCart: shoppingCartReducer,
    },
  });

const store = createStore();

export type AppDispatch = typeof store.dispatch;

export default store;
