import { PropsWithChildren } from 'react';

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

import { Footer } from '../_interfaces/footer.interface';
import { Header } from '../_interfaces/header.interface';

interface LayoutComponentProps {
  header: Header;
  footer: Footer;
}

export const LayoutComponent = ({
  header,
  children,
  footer,
}: PropsWithChildren<LayoutComponentProps>) => {
  return (
    <>
      <HeaderComponent {...header} />
      <main className="pt-40 pb-28">{children}</main>
      <FooterComponent {...footer} />
    </>
  );
};
