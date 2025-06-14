'use client';

import { landingPageQuery } from '@/gql/landing-page.query';
import { usePageQuery } from '@/hooks/use-page-query.hook';
import { LandingPageData } from '@/interfaces/landing-page-data.interface';
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
