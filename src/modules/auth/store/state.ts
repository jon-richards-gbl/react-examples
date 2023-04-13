import { setDataResult } from "~/lib/helpers/store";
import { AsyncData } from "~/lib/types/store";

import { LoginResponse } from "../types/login";

interface AuthState {
  user: AsyncData<LoginResponse | null>;
}

export function createInitialAuthState(): AuthState {
  return {
    user: setDataResult(null),
  };
}
