import { gql } from 'graphql-request';

export const articlesQuery = gql`
  query ArticlesQuery {
    articles {
      documentId
    }
  }
`;
