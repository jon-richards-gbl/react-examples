import { fetchBaseQuery } from "@reduxjs/toolkit/query";

import { AppState } from "~/lib/types/store";

// https://fakestoreapi.com/docs
const baseUrl = "https://fakestoreapi.com/";

export const storeApiBaseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as AppState).auth.user.data?.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});
