import type { SerializedError } from "@reduxjs/toolkit";

import type { default as store } from "../../../main/Store";

export type AppState = ReturnType<typeof store.getState>;

export interface AsyncData<T> {
  isLoading: boolean;
  data: T;
  error: SerializedError | null;
}
