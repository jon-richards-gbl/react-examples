export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  username: string;
  token: string;
}

export interface LoginDispatchPayload {
  username: string;
  token: string;
}
