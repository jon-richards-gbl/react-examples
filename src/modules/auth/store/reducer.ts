import { createSlice } from "@reduxjs/toolkit";

import { authService } from "../services/authService";
import { AuthState } from "../types/store";
import { postLogin } from "./actions";

const createInitialLoginState = (): AuthState => ({
  isLoading: false,
  isLoggedIn: false,
  loginError: false,
  loggedInUser: null,
  loginToken: null,
});

const authSlice = createSlice({
  name: "auth",
  initialState: createInitialLoginState(),
  reducers: {
    logout(state) {
      authService.clearLoginToken();
      state.isLoggedIn = false;
      state.loggedInUser = null;
      state.loginToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loginError = false;
      state.isLoggedIn = true;
      state.loggedInUser = action.payload.username;
      state.loginToken = action.payload.token;
    });
    builder.addCase(postLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.loginError = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
