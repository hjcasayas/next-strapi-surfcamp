import Image from 'next/image';
import { Logo } from '../_gql/landing-page.interface';

export interface LogoComponentProps {
  logo: Logo;
}

export const LogoComponent = ({ logo }: LogoComponentProps) => {
  return (
    <div className="relative block h-[calc-size(auto,76px)] w-[50px]">
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${logo.image.url}`}
        alt={logo.alt}
        style={{ objectFit: 'cover' }}
        priority
        fill
      />
    </div>
  );
};
