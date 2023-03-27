import type { AuthState } from "../../modules/auth/types/store";

export interface RootState {
  auth: AuthState;
}
