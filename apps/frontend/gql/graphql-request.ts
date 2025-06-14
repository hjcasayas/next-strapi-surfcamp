'use server';

import request from 'graphql-request';

export const graphqlRequest = async <TData = unknown, TVariables = never>(
  query: string,
  variables?: TVariables
): Promise<TData> => {
  return request(process.env.STRAPI_GRAPHQL_ENDPOINT!, query, variables ?? {});
};
