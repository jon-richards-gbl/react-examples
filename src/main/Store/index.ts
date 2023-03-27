import { configureStore } from "@reduxjs/toolkit";
import { RootState } from "../types/store";

export const createStore = () =>
  configureStore<RootState>({
    reducer: {},
  });

const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
