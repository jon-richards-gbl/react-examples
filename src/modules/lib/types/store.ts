// import type { AuthState } from "~/auth/types/store";
// import { ProductsState } from "~/products/services/productService";
// import { LoginState } from "~/auth/services/loginService";
import type { default as store } from "../../../main/Store";

// export interface RootState {
//   auth: AuthState;
//   products: ProductsState;
//   login: LoginState;
// }

export type AppState = ReturnType<typeof store.getState>;
