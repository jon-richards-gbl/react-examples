import { configureStore } from "@reduxjs/toolkit";

import { loginApi } from "~/auth/services/loginService";
import authReducer from "~/auth/store/reducer";
import { productApi } from "~/products/services/productService";

export const createStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      login: loginApi.reducer,
      products: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware, loginApi.middleware),
  });

const store = createStore();

export type AppDispatch = typeof store.dispatch;

export default store;
