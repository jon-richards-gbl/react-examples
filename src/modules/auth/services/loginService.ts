import { createApi } from "@reduxjs/toolkit/query/react";

import { storeApiBaseQuery } from "~/lib/helpers/apiService";

import { LoginRequest, LoginResponse } from "../types/login";

enum LoginEndpoints {
  PostLogin = "auth/login",
}

export const loginApi = createApi({
  reducerPath: "login",
  baseQuery: storeApiBaseQuery,
  endpoints: (builder) => ({
    postLogin: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        method: "post",
        url: LoginEndpoints.PostLogin,
        body,
      }),
    }),
  }),
});

export const { usePostLoginMutation } = loginApi;
