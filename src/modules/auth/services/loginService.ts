import { apiService } from "../../../lib/helpers/apiService";
import { LoginRequest, LoginResponse } from "../types/store";

enum Endpoints {
  PostLogin = "auth/login",
}

export const loginService = {
  async postLogin(data: LoginRequest): Promise<LoginResponse> {
    const res = await apiService.post<{ token: string }, LoginRequest>(
      Endpoints.PostLogin,
      { data }
    );

    return {
      ...res,
      // the api service doesn't include this, but we can get it from the login request
      username: data.username,
    };
  },
};
