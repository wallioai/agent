"use server";

import axios, { AxiosRequestConfig } from "axios";
import { API_URL, APP_KEY } from "@/config/env.config";
import { ApiResponse } from "@/types/api-response.type";
import { cookies } from "next/headers";
import { CookieKeys } from "@/enums/cookie.enum";

const API = API_URL;

export async function getApi<T>(url: string, config?: AxiosRequestConfig<any>) {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(CookieKeys.ACCESS_TOKEN)?.value;
  const apiUrl = `${API}/${url}`;
  return axios
    .get(apiUrl, {
      headers: {
        Authorization: `Bearer ${cookie}`,
        "Access-Control-Allow-Credentials": true,
        [CookieKeys.APP_KEY]: `${APP_KEY}`,
      },
      withCredentials: true,
    })
    .then((res) => res.data as ApiResponse<T>);
}

export async function postApi<T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig<any>
) {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(CookieKeys.ACCESS_TOKEN)?.value;
  const apiUrl = `${API}/${url}`;
  const payload = data;
  return axios
    .post(apiUrl, payload, {
      headers: {
        Authorization: `Bearer ${cookie}`,
        "Access-Control-Allow-Credentials": true,
        [CookieKeys.APP_KEY]: `${APP_KEY}`,
      },
      withCredentials: true,
    })
    .then((res) => res.data as ApiResponse<T>);
}
