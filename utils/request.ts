import axios from "axios";

export interface Options {
  data?: any;
}

export enum RestMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export interface axiosParameter {
  url: string;
  method: RestMethod;
  options?: Options;
}

export const request = async ({ url, method, options }: axiosParameter) => {
  const headers = { "Content-Type": "application/json" };
  const baseURL: string = "";
  const requestUrl: string = baseURL + url;
  const response = await axios({
    url: requestUrl,
    method,
    headers,
    ...options,
  });
  return response.data;
};
