import { createApi } from "@reduxjs/toolkit/query/react";

import { storeApiBaseQuery } from "~/lib/helpers/apiService";

import { Category, ProductFull, ProductStub } from "../types/products";

enum ProductEndpoints {
  GetCategories = "products/categories",
  GetCategory = "products/category/{categoryName}",
  GetItem = "products/{productId}",
}

export const productApi = createApi({
  reducerPath: "products",
  baseQuery: storeApiBaseQuery,
  endpoints: (builder) => ({
    getCategories: builder.query<string[], void>({
      query: () => ({
        url: ProductEndpoints.GetCategories,
      }),
    }),

    getItemsByCategory: builder.query<Category, string>({
      query: (categoryName) => ({
        url: ProductEndpoints.GetCategory.replace(
          "{categoryName}",
          categoryName
        ),
      }),
      transformResponse: (response: ProductStub[], _, categoryName) => ({
        name: categoryName,
        products: response,
      }),
    }),

    getItemById: builder.query<ProductFull, string>({
      query: (productId) => ({
        url: ProductEndpoints.GetItem.replace("{productId}", productId),
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetItemByIdQuery,
  useGetItemsByCategoryQuery,
} = productApi;
