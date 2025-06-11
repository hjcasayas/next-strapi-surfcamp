import Image from 'next/image';

import { imageLoaderProp } from '@/app/_utils/image-loader-prop.util';
import { Cover } from '../_interfaces/header.interface';

type CoverComponentProps = Cover;

export const CoverComponent = ({
  image: { url, alternativeText },
}: CoverComponentProps) => {
  return (
    <Image
      className="top-0 right-0 left-0 z-0 rounded-b-[15%] object-cover object-center"
      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
      loader={imageLoaderProp}
      alt={alternativeText}
      priority
      fill
    />
  );
};
