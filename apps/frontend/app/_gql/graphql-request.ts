'use server';

import request from 'graphql-request';

export const graphqlRequest = async <T>(query: string): Promise<T> => {
  return request('http://cms:1337/graphql', query);
};
