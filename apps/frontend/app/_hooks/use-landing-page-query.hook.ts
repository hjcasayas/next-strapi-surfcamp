import { useQuery } from '@tanstack/react-query';
import { graphqlRequest } from '../_gql/graphql-request';

export const usePageQuery = <TData>({
  queryKeys,
  gqlQuery,
}: {
  queryKeys: string[];
  gqlQuery: string;
}) => {
  return useQuery<TData>({
    queryKey: queryKeys,
    queryFn: () => graphqlRequest<TData>(gqlQuery),
  });
};
