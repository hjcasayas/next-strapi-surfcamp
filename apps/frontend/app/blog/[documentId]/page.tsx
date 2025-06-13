import { articlesQuery } from '@/app/_gql/articles.query';
import {
  blogByDocumentIdPageQuery,
  blogByDocumentIdPageQueryVariables,
} from '@/app/_gql/blog-by-document-id-page.query copy';
import { graphqlRequest } from '@/app/_gql/graphql-request';
import { Article } from '@/app/_interfaces/article.interface';

const BlogByDocumentIdPage = async ({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) => {
  const { documentId } = await params;
  const data = await graphqlRequest<Article, { documentId: string }>(
    blogByDocumentIdPageQuery,
    blogByDocumentIdPageQueryVariables(documentId)
  );
  console.log({ data });

  return (
    <>
      <p>blog-by-document-id-page works!: {documentId}</p>
    </>
  );
};

export async function generateStaticParams() {
  const data: { articles: Article[] } = await graphqlRequest<{
    articles: Article[];
  }>(articlesQuery);
  console.log({ data });
  return data.articles.map(({ documentId }) => ({
    documentId,
  }));
}

export const revalidate = 60;
export const dynamicParams = true;

export default BlogByDocumentIdPage;
