import { createSelector } from "@reduxjs/toolkit";

import type { AppState } from "~/lib/types/store";

const selectAuthState = (state: AppState) => state.auth;

export const selectLoggedInUsername = createSelector(
  selectAuthState,
  (auth) => {
    return auth.user.data?.username;
  }
);
