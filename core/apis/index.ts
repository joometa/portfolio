import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const isProd = process.env.NEXT_PUBLIC_APP_ENV === "production";

export const api: AxiosInstance = axios.create({
  baseURL: isProd
    ? "https://portfolio-joometa.vercel.app/api"
    : "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

interface Request extends AxiosRequestConfig {
  url: string;
  body?: FormData;
  lang?: string;
}

export async function request<R>({ method = "GET", url, params }: Request) {
  let data;
  if (method !== "GET" && params) data = params;

  const { data: result } = await api.request<R>({
    method: method || "GET",
    url,
    ...(data && { data }),
    ...(params && method === "GET" && { params }),
  });
  return result;
}
