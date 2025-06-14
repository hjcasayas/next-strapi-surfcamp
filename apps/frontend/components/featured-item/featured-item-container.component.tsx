import { cn } from '@/utils/cn.util';
import NextLink, { LinkProps } from 'next/link';

interface FeaturedItemContainerProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

export const FeaturedItemContainerComponent = ({
  children,
  className = '',
  ...linkProps
}: FeaturedItemContainerProps) => {
  return (
    <NextLink
      className={cn(
        'bg-light-brown rounded-4xl flex flex-col overflow-hidden pb-9',
        className
      )}
      {...linkProps}
    >
      {children}
    </NextLink>
  );
};
