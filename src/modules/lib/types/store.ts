import type { default as store } from "../../../main/Store";

export type AppState = ReturnType<typeof store.getState>;
