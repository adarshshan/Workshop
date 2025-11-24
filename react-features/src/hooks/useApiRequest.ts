import { useState, useCallback } from "react";

interface ApiRequestOptions<T = any> {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: T;
  headers?: Record<string, string>;
}

const useApiRequest = <T = any, R = any>() => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<R | null>(null);

  const request = useCallback(
    async ({
      url,
      method = "GET",
      body,
      headers = {},
    }: ApiRequestOptions<T>): Promise<R | void> => {
      setLoading(true);
      setError(null);
      try {
        const options: RequestInit = {
          method,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
        };
        if (body) {
          options.body = JSON.stringify(body);
        }

        const res = await fetch(url, options);
        const responseData = await res.json();
        setData(responseData);
        return responseData;
      } catch (err: any) {
        const errorMessage = err.message || "Something went wrong";
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    loading,
    error,
    data,
    request,
  };
};

export default useApiRequest;