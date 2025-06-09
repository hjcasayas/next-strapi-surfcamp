import Image from 'next/image';

import { Hero } from '@/app/_gql/landing-page.interface';
import { imageLoaderProp } from '@/app/_utils/image-loader-prop.util';
import { LogoComponent } from './logo.component';
import { CtaButtonComponent } from './cta-button.component';

type HeroComponentProps = Hero;

export const HeroComponent = (props: HeroComponentProps) => {
  const {
    cover: {
      altText,
      image: { url },
    },
    headings,
    logo,
    ctaButton,
  } = props;

  return (
    <div>
      <Image
        className="clip-hero-image inset-0 -z-10 max-h-[80vh] object-cover"
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
        alt={altText}
        fill
        loader={imageLoaderProp}
      />
      {headings.map((heading) => (
        <h1 key={heading.id} className="text-5xl font-bold text-black">
          {heading.text}
        </h1>
      ))}
      <CtaButtonComponent
        {...ctaButton}
        className="rounded-full px-5 py-3 font-bold"
      />
      <LogoComponent {...logo} />
    </div>
  );
};
