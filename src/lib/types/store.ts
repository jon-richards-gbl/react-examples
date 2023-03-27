import type { AuthState } from "../../modules/auth/types/store";
import { ProductsState } from "../../modules/products/types/products";

export interface RootState {
  auth: AuthState;
  products: ProductsState;
}
