'use client';

import { experiencePageQuery } from '@/app/_gql/experience-page.query';
import { ExperiencePageData } from '@/app/_interfaces/experience-page-data.interface';
import { usePageQuery } from '@/app/_hooks/use-landing-page-query.hook';

import { InfoBlocksComponent } from '../info-blocks.component';
import { LayoutComponent } from '../layout.component';

export const ExperiencePageComponent = () => {
  const { data, isLoading, isError } = usePageQuery<{
    experiencePage: ExperiencePageData;
  }>({
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
  const { header, infoBlocks, footer } = experiencePage;

  return (
    <LayoutComponent header={header} footer={footer}>
      <InfoBlocksComponent infoBlocks={infoBlocks} />
    </LayoutComponent>
  );
};
