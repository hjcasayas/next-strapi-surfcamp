'use client';

import {
  blogByDocumentIdPageQuery,
  blogByDocumentIdPageQueryVariables,
} from '@/gql/blog-by-document-id-page.query';
import { usePageQuery } from '@/hooks/use-page-query.hook';
import { Article } from '@/interfaces/article.interface';

export const BlogByDocumentIdPageComponent = ({
  documentId,
}: {
  documentId: string;
}) => {
  const { data, isLoading, isError } = usePageQuery<
    { article: Article },
    { documentId: string }
  >({
    queryKeys: ['blogByDocumentIdPage', documentId],
    gqlQuery: blogByDocumentIdPageQuery,
    variables: blogByDocumentIdPageQueryVariables(documentId),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error loading data.</p>;
  }

  if (data?.article == null) {
    return <p>No data available.</p>;
  }

  return <p>blog-by-document-id-page works!: {documentId}</p>;
};
