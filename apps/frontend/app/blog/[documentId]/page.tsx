import { BlogByDocumentIdPageComponent } from '@/app/_components/pages/blog-by-document-id-page.component';
import { articlesQuery } from '@/app/_gql/articles.query';
import {
  blogByDocumentIdPageQuery,
  blogByDocumentIdPageQueryVariables,
} from '@/app/_gql/blog-by-document-id-page.query copy';
import { graphqlRequest } from '@/app/_gql/graphql-request';
import { Article } from '@/app/_interfaces/article.interface';
import { getQueryClient } from '@/app/_utils/react-query.util';
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
