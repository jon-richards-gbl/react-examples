export interface AuthState {
  // isLoggedIn: boolean;
  loggedInUser: string | null;
  // isLoading: boolean;
  // loginError: unknown | false;
  loginToken: string | null;
}
