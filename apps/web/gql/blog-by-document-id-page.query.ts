import { gql } from 'graphql-request';

export const blogByDocumentIdPageQuery = gql`
  query BlogByDocumentIdPageQuery($documentId: ID!) {
    article(documentId: $documentId) {
      body
      image {
        url
        alternativeText
      }
      title
      publishedDate
    }
  }
`;

export const blogByDocumentIdPageQueryVariables = (documentId: string) => ({
  documentId,
});
