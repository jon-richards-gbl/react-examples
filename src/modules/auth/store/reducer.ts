import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { LoginDispatchPayload } from "../types/login";

interface AuthState {
  loggedInUser: string | null;
  loginToken: string | null;
}

const createInitialLoginState = (): AuthState => ({
  loggedInUser: null,
  loginToken: null,
});

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
