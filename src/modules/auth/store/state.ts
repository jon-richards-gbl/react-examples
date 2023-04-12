interface AuthState {
  loggedInUser: string | null;
  loginToken: string | null;
}

export const createInitialLoginState = (): AuthState => ({
  loggedInUser: null,
  loginToken: null,
});
