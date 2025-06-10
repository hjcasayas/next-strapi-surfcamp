import Image from 'next/image';
import { Logo } from '../_gql/landing-page.interface';

export interface LogoComponentProps extends Logo {
  className?: string;
}

export const LogoComponent = (props: LogoComponentProps) => {
  const {
    image: { url },
    altText,
    className = '',
  } = props;

  return (
    <Image
      className={className}
      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
      alt={altText}
      unoptimized
      fill
      priority
      objectFit="contain"
    />
  );
};
