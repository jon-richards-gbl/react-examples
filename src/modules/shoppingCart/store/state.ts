import type { ProductStub } from "~/products/types/products";

interface ShoppingCartState {
  isLoading: boolean;
  items: ProductStub[];
}

export const createInitialShoppingCartState = (): ShoppingCartState => ({
  isLoading: false,
  items: [],
});
