"use server";

import axios from "axios";
import { API_URL } from "@/config/env.config";
import { ApiResponse } from "@/types/api-response.type";

const API = API_URL;

export async function getApi<T>(url: string) {
  const apiUrl = `${API}/${url}`;
  return axios.get(apiUrl).then((res) => res.data as ApiResponse<T>);
}

export async function postApi<T>(url: string, data: any) {
  const apiUrl = `${API}/${url}`;
  const payload = data;
  return axios.post(apiUrl, payload).then((res) => res.data as ApiResponse<T>);
}
