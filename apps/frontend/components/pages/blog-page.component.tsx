'use client';

import { BlogPageData } from '@/interfaces/blog-page-data.interface';

import { usePageQuery } from '@/hooks/use-page-query.hook';

import { blogPageQuery } from '@/gql/blog-page.query';

import { LayoutComponent } from '../layout.component';
import { HighlightedArticleComponent } from '../highlighted-article.component';
import { NewsletterFormComponent } from '../newsletter-form.component';
import { FeaturedArticlesComponent } from '../featured-articles.component';

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
  const {
    header,
    footer,
    highlightedArticle,
    newsletterForm,
    featuredArticles,
  } = blogPage;

  return (
    <LayoutComponent
      header={header}
      footer={footer}
      className="flex flex-col space-y-[100px] px-12"
    >
      <HighlightedArticleComponent {...highlightedArticle} />
      <NewsletterFormComponent {...newsletterForm} />
      <FeaturedArticlesComponent {...featuredArticles} />
    </LayoutComponent>
  );
};
