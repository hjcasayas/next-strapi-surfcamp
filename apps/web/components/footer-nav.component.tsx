import { Navigation } from '@/interfaces/navigation.interface';
import { cn } from '@/utils/cn.util';
import { colorClassNameMap } from '@/utils/nav-color-class-name-map.util';
import NextLink from 'next/link';

export const FooterNav = ({ links, colorClassName }: Navigation) => {
  return (
    <ul
      className={cn(
        'flex items-center space-x-16',
        colorClassNameMap[colorClassName]
      )}
    >
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
