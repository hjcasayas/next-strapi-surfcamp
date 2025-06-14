import { BlogByDocumentIdPageComponent } from '@/components/blog-by-document-id-page.component';
import { articlesQuery } from '@/gql/articles.query';
import {
  blogByDocumentIdPageQuery,
  blogByDocumentIdPageQueryVariables,
} from '@/gql/blog-by-document-id-page.query';
import { graphqlRequest } from '@/gql/graphql-request';
import { Article } from '@/interfaces/article.interface';
import { getQueryClient } from '@/utils/react-query.util';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

const BlogByDocumentIdPage = async ({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) => {
  const { documentId } = await params;

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['blogByDocumentIdPage', documentId],
    queryFn: () =>
      graphqlRequest(
        blogByDocumentIdPageQuery,
        blogByDocumentIdPageQueryVariables(documentId)
      ),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BlogByDocumentIdPageComponent documentId={documentId} />
    </HydrationBoundary>
  );
};

export async function generateStaticParams() {
  const data: { articles: Article[] } = await graphqlRequest<{
    articles: Article[];
  }>(articlesQuery);
  if (data == null || data.articles == null) {
    return [];
  }

  return data.articles.map(({ documentId }) => ({
    documentId,
  }));
}

export const revalidate = 60;
export const dynamicParams = true;

export default BlogByDocumentIdPage;
