import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// import { authService } from "../services/authService";
import { LoginDispatchPayload } from "../types/login";

interface AuthState {
  loggedInUser: string | null;
  loginToken: string | null;
}

const createInitialLoginState = (): AuthState => ({
  // isLoading: false,
  // isLoggedIn: false,
  // loginError: false,
  loggedInUser: null,
  loginToken: null,
});

const authSlice = createSlice({
  name: "auth",
  initialState: createInitialLoginState(),
  reducers: {
    logout(state) {
      // authService.clearLoginToken();
      // state.isLoggedIn = false;
      state.loggedInUser = null;
      state.loginToken = null;
    },
    login(state, action: PayloadAction<LoginDispatchPayload>) {
      const { username, token } = action.payload;
      // state.isLoggedIn = true;
      state.loggedInUser = username;
      state.loginToken = token;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(postLogin.pending, (state) => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(postLogin.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.loginError = false;
  //     state.isLoggedIn = true;
  //     state.loggedInUser = action.payload.username;
  //     state.loginToken = action.payload.token;
  //   });
  //   builder.addCase(postLogin.rejected, (state, action) => {
  //     state.isLoading = false;
  //     state.loginError = action.payload;
  //   });
  // },
});

export const { logout, login } = authSlice.actions;

export default authSlice.reducer;
