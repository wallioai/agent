"use server";

import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { ApiResponse } from "@/types/api-response.type";
import { SERVER_API, APP_KEY } from "@/config/env.config";
import { cookies } from "next/headers";
import { CookieKeys } from "@/enums/cookie.enum";

const API = SERVER_API;

export async function getApi<T>(url: string) {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(CookieKeys.ACCESS_TOKEN)?.value;
  const apiUrl = `${API}/${url}`;
  console.log(APP_KEY);
  return axios
    .get(apiUrl, {
      headers: {
        Authorization: `Bearer ${cookie}`,
        "Access-Control-Allow-Credentials": true,
        [CookieKeys.APP_KEY]: `${APP_KEY}`,
      },
      withCredentials: true,
    })
    .then((res) => res.data as ApiResponse<T>)
    .catch((err: AxiosError) => {
      throw new Error((err.response?.data as any).message);
    });
}

export async function postApi<T>(url: string, data: any) {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(CookieKeys.ACCESS_TOKEN)?.value;
  const apiUrl = `${API}/${url}`;
  console.log(APP_KEY);
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
