import type { AuthState } from "~/auth/types/store";
import { ProductApiState } from "~/products/services/productService";
import { ProductsState } from "~/products/types/products";

export interface RootState {
  auth: AuthState;
  products: ProductsState;

  productApi: ProductApiState;
}
