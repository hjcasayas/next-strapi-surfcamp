'use client';

import { landingPageQuery } from '@/app/_gql/landing-page.query';
import { LandingPageData } from '@/app/_interfaces/landing-page-data.interface';
import { usePageQuery } from '@/app/_hooks/use-landing-page-query.hook';

import { InfoBlocksComponent } from '../info-blocks.component';
import { LayoutComponent } from '../layout.component';

export const LandingPageComponent = () => {
  const { data, isLoading, isError } = usePageQuery<{
    landingPage: LandingPageData;
  }>({
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
  const { header, infoBlocks, footer } = landingPage;

  return (
    <LayoutComponent header={header} footer={footer}>
      <InfoBlocksComponent infoBlocks={infoBlocks} />
    </LayoutComponent>
  );
};
