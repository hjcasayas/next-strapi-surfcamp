import { Hero } from '@/interfaces/header.interface';
import { CtaButtonComponent } from './cta-button.component';
import { LogoComponent } from './logo.component';
import { CoverComponent } from './cover.component';
import { HeadlinesComponent } from './headlines.component';

export const HeroComponent = ({
  cover,
  ctaButton,
  logo,
  ...headlines
}: Hero) => {
  return (
    <div className="relative flex h-full flex-1 flex-col items-start justify-center px-12 pb-32 pt-56">
      <CoverComponent {...cover} />
      <HeadlinesComponent {...headlines} />
      <CtaButtonComponent {...ctaButton} className="z-10 px-8 py-4 text-3xl" />
      <div className="absolute bottom-0 left-1/2 z-10 h-[185px] w-[120px] -translate-x-1/2 translate-y-1/2">
        <LogoComponent {...logo} />
      </div>
    </div>
  );
};
