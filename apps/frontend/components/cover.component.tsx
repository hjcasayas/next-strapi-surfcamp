import { Cover } from '@/interfaces/header.interface';
import { imageLoaderProp } from '@/utils/image-loader-prop.util';
import Image from 'next/image';

type CoverComponentProps = Cover;

export const CoverComponent = ({
  image: { url, alternativeText },
}: CoverComponentProps) => {
  return (
    <Image
      className="left-0 right-0 top-0 z-0 rounded-b-[15%] object-cover object-center"
      src={`${process.env.NODE_ENV != 'production' ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}` : `${url}`}`}
      loader={imageLoaderProp}
      alt={alternativeText ?? ''}
      priority
      fill
    />
  );
};
