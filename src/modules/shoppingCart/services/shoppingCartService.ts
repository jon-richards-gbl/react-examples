import { createApi } from "@reduxjs/toolkit/query/react";

import { storeApiBaseQuery } from "~/lib/helpers/apiBaseQuery";
import type { ProductStub } from "~/products/types/products";

import {
  addLocalStoreMock,
  getLocalStoreMock,
  mapItemsToCart,
  removeLocalStoreMock,
} from "../helpers/shoppingCart";

enum ShoppingCartEndpoints {
  PutUpdateCart = "carts/7",
  GetUpdateCart = "carts/7",
}

const CART_TAG = "Cart";

export const shoppingCartApi = createApi({
  reducerPath: "shoppingCart",
  baseQuery: storeApiBaseQuery,
  tagTypes: [CART_TAG],
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (item: ProductStub) => ({
        url: ShoppingCartEndpoints.PutUpdateCart,
        method: "PUT",
        data: mapItemsToCart([item]),
      }),
      transformResponse: (__, _, item) => {
        // behind the scenes putting the data into local storage since the fake api won't persist
        return addLocalStoreMock(item);
      },
      invalidatesTags: [CART_TAG],
    }),

    removeFromCart: builder.mutation({
      query: (item: ProductStub) => ({
        url: ShoppingCartEndpoints.PutUpdateCart,
        method: "PUT",
        data: mapItemsToCart([item]),
      }),
      transformResponse: (__, _, item) => {
        // behind the scenes putting the data into local storage since the fake api won't persist
        return removeLocalStoreMock(item);
      },
      invalidatesTags: [CART_TAG],
    }),

    fetchCart: builder.query<ProductStub[], void>({
      query: () => ShoppingCartEndpoints.GetUpdateCart,
      transformResponse: () => {
        // behind the scenes getting the data from local storage since the fake api won't persist
        return getLocalStoreMock();
      },
      providesTags: ["Cart"],
    }),
  }),
});

export const {
  useRemoveFromCartMutation,
  useFetchCartQuery,
  useAddToCartMutation,
} = shoppingCartApi;
