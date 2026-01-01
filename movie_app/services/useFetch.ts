import { useEffect, useState } from "react";

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (autoFetch) fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchFunction();
      if (result) {
        setData(result);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An Error occured!"));
      console.error(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
    setLoading(false);
  };
  return { data, loading, error, refetch: fetchData, reset };
};

export default useFetch;
