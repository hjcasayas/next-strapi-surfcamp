import { isServer, QueryClient } from '@tanstack/react-query';

const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60,
      },
    },
  });
};

let browserQueryClient: QueryClient | null = null;

export const getQueryClient = () => {
  if (isServer) {
    return makeQueryClient();
  }

  if (browserQueryClient === null) {
    browserQueryClient = makeQueryClient();
  }

  return browserQueryClient;
};
