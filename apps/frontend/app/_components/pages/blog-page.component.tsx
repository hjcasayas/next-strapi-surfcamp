'use client';

import { BlogPageData } from '@/app/_interfaces/blog-page-data.interface';
import { usePageQuery } from '@/app/_hooks/use-landing-page-query.hook';
import { blogPageQuery } from '@/app/_gql/blog-page.query';

import { LayoutComponent } from '../layout.component';

export const BlogPageComponent = () => {
  const { data, isLoading, isError } = usePageQuery<{
    blogPage: BlogPageData;
  }>({
    queryKeys: ['blogPage'],
    gqlQuery: blogPageQuery,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error loading data.</p>;
  }

  if (!data) {
    return <p>No data available.</p>;
  }

  const blogPage = data.blogPage;
  const { header, footer } = blogPage;

  return (
    <LayoutComponent header={header} footer={footer}>
      blog-page works!
    </LayoutComponent>
  );
};
