import { configureStore } from "@reduxjs/toolkit";

import authReducer from "~/auth/store/reducer";
import { RootState } from "~/lib/types/store";
import productsReducer from "~/products/store/reducer";

export const createStore = () =>
  configureStore<RootState>({
    reducer: {
      auth: authReducer,
      products: productsReducer,
    },
  });

const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
