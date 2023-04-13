import { setDataResult } from "~/lib/helpers/store";
import { AsyncData } from "~/lib/types/store";

import { Category, ProductFull } from "../types/products";

interface ProductState {
  categoryNames: AsyncData<string[]>;
  products: AsyncData<Record<string, ProductFull>>;
  categories: AsyncData<Record<string, Category>>;
}

export function createInitialProductsState(): ProductState {
  return {
    categories: setDataResult({}),
    products: setDataResult({}),
    categoryNames: setDataResult([]),
  };
}
