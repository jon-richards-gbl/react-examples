import { apiService } from "../../../lib/helpers/apiService";
import { ProductFull, ProductStub } from "../types/products";

enum ProductEndpoints {
  GetCategories = "products/categories",
  GetCategory = "products/category/{categoryName}",
  GetItem = "products/{productId}",
}

export const productService = {
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
