import Image from 'next/image';
import { Logo } from '../_gql/landing-page.interface';

type LogoComponentProps = Logo;

export const LogoComponent = (props: LogoComponentProps) => {
  const {
    image: { url, width, height },
    altText,
  } = props;

  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
      alt={altText}
      width={width}
      height={height}
    />
  );
};
