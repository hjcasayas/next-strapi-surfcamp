'use client';

import { CtaButtonComponent } from '../../cta-button.component';
import { NavigationComponent } from '../../navigation.component';
import { HeadlineComponent } from '../../headline.component';
import { HeaderComponent } from '../../header.component';
import { FooterComponent } from '../../footer.component';
import { CoverComponent } from '../../cover.component';
import { HeaderNav } from '../../header-nav.component';
import { HeroComponent } from '../../hero.component';
import { LogoComponent } from '../../logo.component';

import { useLandingPageQuery } from '../../../_hooks/use-landing-page-query.hook';
import { InfoBlocksComponent } from '../../info-blocks.component';

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

  const { landingPage } = data;
  const { header, footer, infoBlocks } = landingPage;

  const { logo, ctaButton, menu, hero } = header;

  return (
    <>
      <HeaderComponent>
        <NavigationComponent>
          <div className="relative h-20 w-12">
            <LogoComponent {...logo} />
          </div>
          <HeaderNav links={menu.links} />
          <CtaButtonComponent
            {...ctaButton}
            className="rounded-full px-5 py-3 text-2xl"
          />
        </NavigationComponent>
        <HeroComponent>
          <CoverComponent {...hero.cover} />
          <HeadlineComponent headlines={hero.headings} />
          <CtaButtonComponent
            {...hero.ctaButton}
            className="rounded-full px-8 py-4 text-3xl"
          />
          <div className="absolute bottom-0 left-1/2 h-[185px] w-[120px] -translate-x-1/2 translate-y-1/2">
            <LogoComponent {...logo} />
          </div>
        </HeroComponent>
      </HeaderComponent>
      <main>
        <InfoBlocksComponent infoBlocks={infoBlocks} />
      </main>
      <FooterComponent {...footer} />
    </>
  );
};
