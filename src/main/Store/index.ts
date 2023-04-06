import { configureStore } from "@reduxjs/toolkit";

import authReducer from "~/auth/store/reducer";
import { productApi } from "~/products/services/productService";

export const createStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      products: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware),
  });

const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
