import axios, { AxiosRequestConfig, Method } from "axios";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

import { authTokenService } from "~/auth/services/authTokenService";
import { AppState } from "~/lib/types/store";

// https://fakestoreapi.com/docs
const baseURL = "https://fakestoreapi.com/";

const axiosInstance = axios.create({
  baseURL,
});

async function baseRequest<Res>(
  method: Method,
  url: string,
  config?: AxiosRequestConfig
): Promise<Res> {
  const fullConfig: AxiosRequestConfig = {
    ...config,
    method,
    url,
  };

  // apply authentication if the user is logged in
  const loginToken = authTokenService.getLoginToken();
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
  <Res, Data>(url: string, config?: AxiosRequestConfig<Data>): Promise<Res>;
}

interface ApiService {
  get: ServiceRequest;
  post: ServiceRequest;
  put: ServiceRequest;
  delete: ServiceRequest;
}

export const apiService: ApiService = {
  get: (url, config) => baseRequest("GET", url, config),
  post: (url, config) => baseRequest("POST", url, config),
  put: (url, config) => baseRequest("PUT", url, config),
  delete: (url, config) => baseRequest("DELETE", url, config),
};

export const storeApiBaseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as AppState).auth.user.data?.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});