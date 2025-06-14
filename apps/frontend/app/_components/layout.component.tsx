import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

import { Footer } from '../_interfaces/footer.interface';
import { Header } from '../_interfaces/header.interface';
import { cn } from '../_utils/cn.util';

interface LayoutComponentProps {
  children: React.ReactNode;
  className?: string;
  header: Header;
  footer: Footer;
}

export const LayoutComponent = ({
  header,
  children,
  footer,
  className = '',
}: LayoutComponentProps) => {
  return (
    <>
      <HeaderComponent {...header} />
      <main className={cn('pb-28 pt-40', className)}>{children}</main>
      <FooterComponent {...footer} />
    </>
  );
};
