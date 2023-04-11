export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface LoginDispatchPayload {
  username: string;
  token: string;
}
