import { configureStore } from "@reduxjs/toolkit";

import authReducer from "~/auth/store/reducer";
import { productApi } from "~/products/services/productService";
// import { RootState } from "~/lib/types/store";
import productsReducer from "~/products/store/reducer";

export const createStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      products: productsReducer,
      productApi: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware),
  });

const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
