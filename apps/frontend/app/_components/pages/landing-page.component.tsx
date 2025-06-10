'use client';

import { Page } from '@/app/_gql/page.interface';
import { usePageQuery } from '@/app/_hooks/use-landing-page-query.hook';
import { landingPageQuery } from '@/app/_gql/landing-page.query';
import { PageComponent } from '../page.component';

export const LandingPageComponent = () => {
  const { data, isLoading, isError } = usePageQuery<{ landingPage: Page }>({
    queryKeys: ['landingPage'],
    gqlQuery: landingPageQuery,
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

  const landingPage = data.landingPage;

  return <PageComponent {...landingPage} />;
};
