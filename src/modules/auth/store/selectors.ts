import { createSelector } from "@reduxjs/toolkit";

import type { AppState } from "~/lib/types/store";

const selectAuthState = (state: AppState) => state.auth;

export const selectLoggedInUser = createSelector(selectAuthState, (auth) => {
  return auth.loggedInUser;
});
