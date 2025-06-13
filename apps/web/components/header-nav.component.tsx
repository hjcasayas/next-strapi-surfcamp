import NextLink from 'next/link';

import { Navigation } from '@/interfaces/navigation.interface';
import { cn } from '@/utils/cn.util';
import { colorClassNameMap } from '@/utils/nav-color-class-name-map.util';

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
