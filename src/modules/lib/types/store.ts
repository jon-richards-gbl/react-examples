import type { AuthState } from "~/auth/types/store";
import { ProductsState } from "~/products/types/products";

export interface RootState {
  auth: AuthState;
  products: ProductsState;
}
