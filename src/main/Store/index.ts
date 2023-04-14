import { configureStore } from "@reduxjs/toolkit";

import authReducer from "~/auth/store";
import productReducer from "~/products/store";
// import shoppingCartReducer from "~/shoppingCart/store";
import { shoppingCartApi } from "~/shoppingCart/services/shoppingCartService";

export const createStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      products: productReducer,
      // shoppingCart: shoppingCartReducer,
      [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(shoppingCartApi.middleware)
  });

const store = createStore();

export type AppDispatch = typeof store.dispatch;

export default store;
