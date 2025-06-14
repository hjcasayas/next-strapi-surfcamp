'use client';

import { usePageQuery } from '@/hooks/use-page-query.hook';
import { InfoBlocksComponent } from '../info-blocks.component';
import { LayoutComponent } from '../layout.component';
import { experiencePageQuery } from '@/gql/experience-page.query';
import { ExperiencePageData } from '@/interfaces/experience-page-data.interface';

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
