import Image from 'next/image';

import { Cover } from '@/app/_gql/landing-page.interface';

import { imageLoaderProp } from '@/app/_utils/image-loader-prop.util';

type CoverComponentProps = Cover;

export const CoverComponent = ({
  image: { url, alternativeText },
}: CoverComponentProps) => {
  return (
    <Image
      className="clip-hero-image top-0 right-0 left-0 -z-10 object-cover object-center"
      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
      alt={alternativeText}
      fill
      loader={imageLoaderProp}
    />
  );
};
