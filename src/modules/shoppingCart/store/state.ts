import { setDataResult } from "~/lib/helpers/store";
import { AsyncData } from "~/lib/types/store";
import type { ProductStub } from "~/products/types/products";

interface ShoppingCartState {
  items: AsyncData<ProductStub[]>;
}

export const createInitialShoppingCartState = (): ShoppingCartState => ({
  items: setDataResult([]),
});
