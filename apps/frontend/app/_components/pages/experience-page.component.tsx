'use client';

import { Page } from '@/app/_gql/page.interface';
import { usePageQuery } from '@/app/_hooks/use-landing-page-query.hook';
import { PageComponent } from '../page.component';
import { experiencePageQuery } from '@/app/_gql/experience-page.query';

export const ExperiencePageComponent = () => {
  const { data, isLoading, isError } = usePageQuery<{ experiencePage: Page }>({
    queryKeys: ['experiencePage'],
    gqlQuery: experiencePageQuery,
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

  const experiencePage = data.experiencePage;

  return <PageComponent {...experiencePage} />;
};
