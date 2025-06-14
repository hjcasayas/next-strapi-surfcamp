import Image from 'next/image';

import { Logo } from '@/interfaces/logo.interface';

export const LogoComponent = (props: Logo) => {
  const {
    image: { url, alternativeText },
  } = props;

  return (
    <Image
      className="object-contain object-center"
      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
      alt={alternativeText || ''}
      unoptimized
      fill
      priority
    />
  );
};
