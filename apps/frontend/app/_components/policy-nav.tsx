import NextLink from 'next/link';
import { Link } from '../_gql/page.interface';

export const PolicyNav = ({ links }: { links: Link[] }) => {
  return (
    <ul className="flex items-center space-x-11 text-white">
      {links.map((link) => (
        <NextLink
          key={link.slug}
          href={link.url}
          className="text-xl font-normal"
        >
          {link.label}
        </NextLink>
      ))}
    </ul>
  );
};
