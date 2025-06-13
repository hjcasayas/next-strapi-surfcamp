import NextImage from 'next/image';

import { Image } from '@/interfaces/image.interface';

export const FeaturedItemImageComponent = ({ url, alternativeText }: Image) => {
  return (
    <div className="relative h-[420px] w-full">
      <NextImage
        className="object-cover object-center"
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
        alt={alternativeText || ''}
        unoptimized
        fill
        priority
      />
    </div>
  );
};
