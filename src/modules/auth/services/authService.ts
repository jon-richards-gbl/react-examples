const USER_LOGIN_TOKEN = "user-login-token";

export const authService = {
  setLoginToken(token: string): void {
    sessionStorage.setItem(USER_LOGIN_TOKEN, token);
  },

  clearLoginToken(): void {
    sessionStorage.removeItem(USER_LOGIN_TOKEN);
  },

  getLoginToken(): string | null {
    return sessionStorage.getItem(USER_LOGIN_TOKEN);
  },
};
