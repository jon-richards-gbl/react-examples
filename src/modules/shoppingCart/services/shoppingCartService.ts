import { createApi } from "@reduxjs/toolkit/query/react";

import { /* apiService, */ storeApiBaseQuery } from "~/lib/helpers/apiService";
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

export const shoppingCartApi = createApi({
  reducerPath: 'shoppingCartApi',
  baseQuery: storeApiBaseQuery,
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (item: ProductStub) => ({
        url: ShoppingCartEndpoints.PutUpdateCart,
        method: 'PUT',
        data: mapItemsToCart([item])
      }),
      transformResponse: (__, _, item) => {
        // behind the scenes putting the data into local storage since the fake api won't persist
        return addLocalStoreMock(item);
      },
      invalidatesTags: ['Cart']
    }),

    removeFromCart: builder.mutation({
      query: (item: ProductStub) => ({
        url: ShoppingCartEndpoints.PutUpdateCart,
        method: 'PUT',
        data: mapItemsToCart([item])
      }),
      transformResponse: (__, _, item) => {
        // behind the scenes putting the data into local storage since the fake api won't persist
        return removeLocalStoreMock(item);
      },
      invalidatesTags: ['Cart']
    }),

    fetchCart: builder.query<ProductStub[], void>({
      query: () => ShoppingCartEndpoints.GetUpdateCart,
      transformResponse: () => {
        // behind the scenes getting the data from local storage since the fake api won't persist
        return getLocalStoreMock();
      },
      providesTags: ['Cart']
    })
  })
});

export const {
  useRemoveFromCartMutation,
  useFetchCartQuery,
  useAddToCartMutation,
} = shoppingCartApi;

// export const shoppingCartService = {
//   putToCart: async (item: ProductStub) => {
//     // behind the scenes putting the data into local storage since the fake api won't persist
//     const updatedCart = addLocalStoreMock(item);
//
//     await apiService.put(ShoppingCartEndpoints.PutUpdateCart, {
//       data: mapItemsToCart(updatedCart),
//     });
//
//     return updatedCart;
//   },
//
//   removeFromCart: async (item: ProductStub) => {
//     // behind the scenes putting the data into local storage since the fake api won't persist
//     const updatedCart = removeLocalStoreMock(item);
//
//     await apiService.put(ShoppingCartEndpoints.PutUpdateCart, {
//       data: mapItemsToCart(updatedCart),
//     });
//
//     return updatedCart;
//   },
//
//   fetchCart: async () => {
//     // behind the scenes getting the data from local storage since the fake api won't persist
//     const existingCart = getLocalStoreMock();
//
//     await apiService.get(ShoppingCartEndpoints.GetUpdateCart);
//
//     return existingCart;
//   },
// };
