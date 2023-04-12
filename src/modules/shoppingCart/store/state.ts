import type { ProductStub } from "~/products/types/products";

interface ShoppingCartState {
  items: ProductStub[];
}

export const createInitialShoppingCartState = (): ShoppingCartState => ({
  items: [],
});
