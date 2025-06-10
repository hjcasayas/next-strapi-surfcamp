import NextLink from 'next/link';
import { Link } from '../_gql/landing-page.interface';

export const FooterNav = ({ links }: { links: Link[] }) => {
  return (
    <ul className="flex items-center space-x-16 text-white">
      {links.map((link) => (
        <NextLink
          key={link.slug}
          href={link.url}
          className="text-3xl font-bold"
        >
          {link.label}
        </NextLink>
      ))}
    </ul>
  );
};
