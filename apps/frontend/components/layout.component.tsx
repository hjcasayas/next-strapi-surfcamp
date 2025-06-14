import { Footer } from '@/interfaces/footer.interface';
import { Header } from '@/interfaces/header.interface';
import { HeaderComponent } from './header.component';
import { cn } from '@/utils/cn.util';
import { FooterComponent } from './footer.component';

interface LayoutComponentProps {
  header: Header;
  footer: Footer;
  className?: string;
  children: React.ReactNode;
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
