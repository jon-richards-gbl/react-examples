import axios, { AxiosRequestConfig, Method } from "axios";

import { authService } from "../../modules/auth/services/authService";

// https://fakestoreapi.com/docs
const baseURL = "https://fakestoreapi.com/";

const axiosInstance = axios.create({
  baseURL,
});

async function baseRequest<Res>(
  method: Method,
  url: string,
  config: AxiosRequestConfig
): Promise<Res> {
  const fullConfig: AxiosRequestConfig = {
    ...config,
    method,
    url,
  };

  const loginToken = authService.getLoginToken();
  if (loginToken) {
    fullConfig.headers = {
      ...fullConfig.headers,
      Authorization: `Bearer ${loginToken}`,
    };
  }

  const response = await axiosInstance.request(fullConfig);
  return response.data;
}

interface ServiceRequest {
  <Res = unknown, Data = unknown>(
    url: string,
    config?: AxiosRequestConfig<Data>
  ): Promise<Res>;
}

interface ApiService {
  get: ServiceRequest;
  post: ServiceRequest;
  put: ServiceRequest;
  delete: ServiceRequest;
}
export const apiService: ApiService = {
  get: (url, config = {}) => baseRequest("GET", url, config),
  post: (url, config = {}) => baseRequest("POST", url, config),
  put: (url, config = {}) => baseRequest("PUT", url, config),
  delete: (url, config = {}) => baseRequest("DELETE", url, config),
};
