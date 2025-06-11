import NextLink from 'next/link';

import { colorClassNameMap } from '../_utils/nav-color-class-name-map.util';
import { Navigation } from '../_interfaces/navigation.interface';
import { cn } from '../_utils/cn.util';

export const PolicyNav = ({ links, colorClassName }: Navigation) => {
  return (
    <ul
      className={cn(
        'flex items-center space-x-11',
        colorClassNameMap[colorClassName]
      )}
    >
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
