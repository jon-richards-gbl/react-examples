import { apiService } from "~/lib/helpers/apiService";

import { Category, ProductFull } from "../types/products";

enum ProductEndpoints {
  GetCategories = "products/categories",
  GetCategory = "products/category/{categoryName}",
  GetItem = "products/{productId}",
}

export const productService = {
  getCategories: (): Promise<string[]> => {
    return apiService.get(ProductEndpoints.GetCategories);
  },

  getCategoryByName: async (categoryName: string): Promise<Category> => {
    const endpoint = ProductEndpoints.GetCategory.replace(
      "{categoryName}",
      categoryName
    );

    return {
      name: categoryName,
      products: await apiService.get(endpoint),
    };
  },

  getProductById: (productId: string): Promise<ProductFull> => {
    const endpoint = ProductEndpoints.GetItem.replace("{productId}", productId);

    return apiService.get(endpoint);
  },
};
