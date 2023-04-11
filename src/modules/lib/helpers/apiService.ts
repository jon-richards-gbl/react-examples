import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { AppState } from "~/lib/types/store";

// https://fakestoreapi.com/docs
const baseUrl = "https://fakestoreapi.com/";

export const storeApiBaseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as AppState).auth.loginToken;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});
