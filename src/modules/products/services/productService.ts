import { createApi } from "@reduxjs/toolkit/query/react";

import { apiService, storeApiBaseQuery } from "~/lib/helpers/apiService";

import { Category, ProductFull, ProductStub } from "../types/products";

enum ProductEndpoints {
  GetCategories = "products/categories",
  GetCategory = "products/category/{categoryName}",
  GetItem = "products/{productId}",
}

export const productApi = createApi({
  reducerPath: "productApi",
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

export type ProductApiState = typeof productApi.reducer;
export const {
  useGetCategoriesQuery,
  useGetItemByIdQuery,
  useGetItemsByCategoryQuery,
} = productApi;

export const productService_OLD = {
  getCategories: () => {
    return apiService.get<string[]>(ProductEndpoints.GetCategories);
  },

  getItemsByCategory: (categoryName: string) => {
    const endpoint = ProductEndpoints.GetCategory.replace(
      "{categoryName}",
      categoryName
    );

    return apiService.get<ProductStub[]>(endpoint);
  },

  getItemById: (productId: string) => {
    const endpoint = ProductEndpoints.GetItem.replace("{productId}", productId);

    return apiService.get<ProductFull>(endpoint);
  },
};
