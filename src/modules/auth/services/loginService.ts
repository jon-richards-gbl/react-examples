import { createApi } from "@reduxjs/toolkit/query/react";

import {
  /* apiService, */
  storeApiBaseQuery,
} from "~/lib/helpers/apiService";

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

// export type LoginState = ReturnType<typeof loginApi.reducer>;

export const { usePostLoginMutation } = loginApi;

// export const loginService = {
//   async postLogin(data: LoginRequest): Promise<LoginResponse> {
//     const res = await apiService.post<{ token: string }, LoginRequest>(
//       LoginEndpoints.PostLogin,
//       { data }
//     );
//
//     return {
//       ...res,
//       // the api service doesn't include this, but we can get it from the login request
//       username: data.username
//     };
//   }
// };
