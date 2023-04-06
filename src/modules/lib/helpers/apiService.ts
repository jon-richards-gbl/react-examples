import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import axios, { AxiosRequestConfig, Method } from "axios";

import { authService } from "~/auth/services/authService";
import { RootState } from "~/lib/types/store";

// https://fakestoreapi.com/docs
const baseUrl = "https://fakestoreapi.com/";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export const storeApiBaseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.loginToken;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
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
