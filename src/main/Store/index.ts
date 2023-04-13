import { configureStore } from "@reduxjs/toolkit";

import authReducer from "~/auth/store";
import productReducer from "~/products/store";

export const createStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      products: productReducer,
    },
  });

const store = createStore();

export type AppDispatch = typeof store.dispatch;

export default store;
