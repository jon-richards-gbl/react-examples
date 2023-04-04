import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "~/lib/types/store";

const selectAuthState = (state: RootState) => state.auth;

export const selectLoggedInUser = createSelector(selectAuthState, (auth) => {
  if (!auth.isLoggedIn) {
    return null;
  }

  return auth.loggedInUser;
});
