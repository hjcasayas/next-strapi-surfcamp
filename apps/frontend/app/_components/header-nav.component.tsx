import NextLink from 'next/link';

import { Navigation } from '@/app/_gql/page.interface';
import { colorClassNameMap } from '../_utils/nav-color-class-name-map.util';
import { cn } from '../_utils/cn.util';

export const HeaderNav = ({ links, colorClassName }: Navigation) => {
  return (
    <ul
      className={cn(
        'flex items-center space-x-12',
        colorClassNameMap[colorClassName]
      )}
    >
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
