import { PropsWithChildren } from 'react';

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

import { Footer } from '../_interfaces/footer.interface';
import { Header } from '../_interfaces/header.interface';
import { cn } from '../_utils/cn.util';

interface LayoutComponentProps {
  header: Header;
  footer: Footer;
  className?: string;
}

export const LayoutComponent = ({
  header,
  children,
  footer,
  className = '',
}: PropsWithChildren<LayoutComponentProps>) => {
  return (
    <>
      <HeaderComponent {...header} />
      <main className={cn('pt-40 pb-28', className)}>{children}</main>
      <FooterComponent {...footer} />
    </>
  );
};
