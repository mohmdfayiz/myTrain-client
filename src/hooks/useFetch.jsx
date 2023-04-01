import { useQuery } from "@tanstack/react-query";

const useFetch = (query, key) => {
  if (!query) return;
  const { data:result, isLoading, error } = useQuery([key], query);

  return { result, isLoading, error };
};

export default useFetch;
