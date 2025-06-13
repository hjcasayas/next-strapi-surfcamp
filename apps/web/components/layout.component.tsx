import { Footer } from '@/interfaces/footer.interface';
import { Header } from '@/interfaces/header.interface';
import { PropsWithChildren } from 'react';
import { HeaderComponent } from './header.component';
import { cn } from '@/utils/cn.util';
import { FooterComponent } from './footer.component';

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
