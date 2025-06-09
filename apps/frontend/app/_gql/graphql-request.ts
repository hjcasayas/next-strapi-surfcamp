'use server';

import request from 'graphql-request';

export const graphqlRequest = async <T>(query: string): Promise<T> => {
  return request(process.env.STRAPI_GRAPHQL_ENDPOINT!, query);
};
