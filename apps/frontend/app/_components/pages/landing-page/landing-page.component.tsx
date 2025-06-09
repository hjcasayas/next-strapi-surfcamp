'use client';

import { useLandingPageQuery } from '../../../_hooks/use-landing-page-query.hook';
import { FooterComponent } from '../../footer.component';
import { HeaderComponent } from '../../header.component';

export const LandingPageComponent = () => {
  const { data, isLoading, isError } = useLandingPageQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error loading data.</p>;
  }

  if (!data) {
    return <p>No data available.</p>;
  }

  return (
    <>
      <HeaderComponent {...data.landingPage.header} />
      <FooterComponent {...data.landingPage.footer} />
    </>
  );
};
