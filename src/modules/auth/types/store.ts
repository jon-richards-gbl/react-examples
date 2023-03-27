export interface AuthState {
  isLoggedIn: boolean;
  loggedInUser: string | null;
  isLoading: boolean;
  loginError: unknown | false;
  loginToken: string | null;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  username: string;
  token: string;
}
