import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 24 * 60 * 60 * 1000,
      staleTime: 60 * 60 * 1000,
      refetchInterval: 60 * 60 * 1000,
    },
  },
});
