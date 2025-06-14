import { graphqlRequest } from '@/gql/graphql-request';
import { useQuery } from '@tanstack/react-query';

export const usePageQuery = <TData, TVariables = never>({
  queryKeys,
  gqlQuery,
  variables,
}: {
  queryKeys: string[];
  gqlQuery: string;
  variables?: TVariables;
}) => {
  return useQuery<TData>({
    queryKey: queryKeys,
    queryFn: () => graphqlRequest<TData, TVariables>(gqlQuery, variables),
  });
};
