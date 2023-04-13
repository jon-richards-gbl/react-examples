import { createSlice } from "@reduxjs/toolkit";

import {
  setDataPending,
  setDataRejected,
  setDataResult,
} from "~/lib/helpers/store";

import { submitLogin } from "./actions";
import { createInitialAuthState } from "./state";

import { authTokenService } from "../services/authTokenService";

const authSlice = createSlice({
  name: "auth",
  initialState: createInitialAuthState(),
  reducers: {
    logout(state) {
      authTokenService.clearLoginToken();
      state.user = setDataResult(null);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitLogin.pending, (state) => {
      state.user = setDataPending(state.user);
    });
    builder.addCase(submitLogin.fulfilled, (state, action) => {
      authTokenService.setLoginToken(action.payload.token);
      state.user = setDataResult(action.payload);
    });
    builder.addCase(submitLogin.rejected, (state, action) => {
      state.user = setDataRejected(state.user, action.error);
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
