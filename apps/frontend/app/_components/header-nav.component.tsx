import NextLink from 'next/link';

import { Link } from '@/app/_gql/page.interface';

interface HeaderNavProps {
  links: Link[];
}

export const HeaderNav = ({ links }: HeaderNavProps) => {
  return (
    <ul className="flex items-center space-x-12">
      {links.map((link) => (
        <NextLink
          key={link.slug}
          href={link.url}
          className="text-3xl font-normal"
        >
          {link.label}
        </NextLink>
      ))}
    </ul>
  );
};
