import { Navigation } from '@/interfaces/navigation.interface';
import { cn } from '@/utils/cn.util';
import { colorClassNameMap } from '@/utils/nav-color-class-name-map.util';
import NextLink from 'next/link';

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
