import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { createInitialLoginState } from "~/auth/store/state";

import { LoginDispatchPayload } from "../types/login";

const authSlice = createSlice({
  name: "auth",
  initialState: createInitialLoginState(),
  reducers: {
    logout(state) {
      state.loggedInUser = null;
      state.loginToken = null;
    },
    login(state, action: PayloadAction<LoginDispatchPayload>) {
      const { username, token } = action.payload;
      state.loggedInUser = username;
      state.loginToken = token;
    },
  },
});

export const { logout, login } = authSlice.actions;

export default authSlice.reducer;
