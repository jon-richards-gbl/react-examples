import { configureStore } from "@reduxjs/toolkit";

import { RootState } from "../../lib/types/store";
import authReducer from "../../modules/auth/store/reducer";

export const createStore = () =>
  configureStore<RootState>({
    reducer: {
      auth: authReducer,
    },
  });

const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
