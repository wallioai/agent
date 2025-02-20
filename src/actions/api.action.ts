"use server";

import axios, { AxiosRequestConfig } from "axios";
import { ApiResponse } from "@/types/api-response.type";

const API = "http://localhost:3000";

export async function getApi<T>(url: string, config?: AxiosRequestConfig<any>) {
  const apiUrl = `${API}/${url}`;
  return axios.get(apiUrl).then((res) => res.data as T);
}

export async function postApi<T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig<any>,
) {
  const apiUrl = `${API}/${url}`;
  const payload = data;
  return axios.post(apiUrl, payload).then((res) => res.data as T);
}
