import { createAsyncThunk } from "@reduxjs/toolkit";

import { authService } from "../services/authService";
import { loginService } from "../services/loginService";
import { LoginRequest } from "../types/store";

export const postLogin = createAsyncThunk(
  "auth/loginRequest",
  async (req: LoginRequest) => {
    const res = await loginService.postLogin(req);

    authService.setLoginToken(res.token);

    return res;
  }
);
