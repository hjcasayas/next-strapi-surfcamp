import Image from 'next/image';
import { Logo } from '../_gql/landing-page.interface';
import { cn } from '../_utils/cn.util';

export const LogoComponent = (props: Logo) => {
  const {
    image: { url, alternativeText },
    colorClassName = 'logo_black',
  } = props;

  console.log({ props });

  const colorClassNameMap: Record<string, string> = {
    logo_black: 'logo-black',
    logo_white: 'logo-white',
    logo_orange: 'logo-orange',
  };

  return (
    <Image
      className={cn(
        'object-contain object-center',
        colorClassNameMap[colorClassName]
      )}
      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
      alt={alternativeText}
      unoptimized
      fill
      priority
    />
  );
};
