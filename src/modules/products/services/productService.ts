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
      query: () => ProductEndpoints.GetCategories,
    }),

    getItemsByCategory: builder.query<Category, string>({
      query: (categoryName) =>
        ProductEndpoints.GetCategory.replace("{categoryName}", categoryName),
      transformResponse(baseQueryReturnValue: ProductStub[], _, categoryName) {
        return {
          name: categoryName,
          products: baseQueryReturnValue,
        };
      },
    }),

    getItemById: builder.query<ProductFull, string>({
      query: (productId) =>
        ProductEndpoints.GetItem.replace("{productId}", productId),
    }),
  }),
});

export type ProductsState = typeof productApi.reducer;

export const {
  useGetCategoriesQuery,
  useGetItemByIdQuery,
  useGetItemsByCategoryQuery,
} = productApi;
