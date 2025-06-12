import { cn } from '@/app/_utils/cn.util';
import NextLink, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

interface FeaturedItemContainerProps extends LinkProps {
  className?: string;
}

export const FeaturedItemContainerComponent = ({
  children,
  className = '',
  ...linkProps
}: PropsWithChildren<FeaturedItemContainerProps>) => {
  return (
    <NextLink
      className={cn(
        'bg-light-brown flex flex-col overflow-hidden rounded-4xl pb-9',
        className
      )}
      {...linkProps}
    >
      {children}
    </NextLink>
  );
};
