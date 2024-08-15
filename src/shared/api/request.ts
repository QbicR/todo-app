import type { AxiosRequestConfig } from "axios"

import axios from "axios"

type TMethods = "get" | "post" | "put" | "delete"

const BASE_URL = "http://localhost:8000/"

const DEFAULT_HEADERS = {
  Accept: "application/json",
}

export const request = <T>(
  method: TMethods,
  url: string,
  options: AxiosRequestConfig,
) =>
  axios.create().request<T>({
    method,
    url,
    baseURL: BASE_URL,
    headers: DEFAULT_HEADERS,
    ...options,
  })
