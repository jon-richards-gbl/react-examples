import type { AuthState } from "~/auth/types/store";
import { ProductsState } from "~/products/services/productService";

export interface RootState {
  auth: AuthState;
  products: ProductsState;
}
