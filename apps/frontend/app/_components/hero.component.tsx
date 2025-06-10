import { Hero } from '../_gql/page.interface';
import { CoverComponent } from './cover.component';
import { HeadlineComponent } from './headline.component';
import { CtaButtonComponent } from './cta-button.component';
import { LogoComponent } from './logo.component';

export const HeroComponent = ({
  cover,
  ctaButton,
  logo,
  ...headings
}: Hero) => {
  return (
    <div className="relative flex h-full flex-1 flex-col items-start justify-center px-12 pt-56 pb-32">
      <CoverComponent {...cover} />
      <HeadlineComponent {...headings} />
      <CtaButtonComponent
        {...ctaButton}
        className="z-10 rounded-full px-8 py-4 text-3xl"
      />
      <div className="absolute bottom-0 left-1/2 z-10 h-[185px] w-[120px] -translate-x-1/2 translate-y-1/2">
        <LogoComponent {...logo} />
      </div>
    </div>
  );
};
