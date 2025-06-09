import NextLink from 'next/link';

import { Footer, Link } from '../_gql/landing-page.interface';
import { LogoComponent } from './logo.component';

type FooterComponentProps = Footer;

export const FooterNav = ({ links }: { links: Link[] }) => {
  return (
    <ul className="flex items-center space-x-16 text-white">
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

export const PolicyNav = ({ links }: { links: Link[] }) => {
  return (
    <ul className="flex items-center space-x-11 text-white">
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

export const FooterComponent = (props: FooterComponentProps) => {
  const { logo, menu, policies, copyright } = props;
  return (
    <footer className="flex flex-col space-y-8 bg-black px-11 pt-20 pb-11 text-white">
      <div className="flex items-center justify-between">
        <LogoComponent {...logo} />
        <FooterNav links={menu.links} />
      </div>
      <div className="flex items-center justify-between">
        <PolicyNav links={policies.links} />
        <span className="text-xl font-normal">{copyright}</span>
      </div>
    </footer>
  );
};
