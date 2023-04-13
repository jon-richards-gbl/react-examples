import { createAsyncThunk } from "@reduxjs/toolkit";

import { loginService } from "../services/loginService";
import { LoginRequest } from "../types/login";

export const submitLogin = createAsyncThunk(
  "auth/loginRequest",
  (req: LoginRequest) => loginService.postLogin(req)
);
