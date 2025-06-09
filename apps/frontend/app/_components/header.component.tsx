import NextLink from 'next/link';
import { Header, Link } from '../_gql/landing-page.interface';
import { LogoComponent } from './logo.component';
import { CtaButtonComponent } from './cta-button.component';
import { HeroComponent } from './hero.component';

type HeaderComponentProps = Header;

const HeaderNav = ({ links }: { links: Link[] }) => {
  return (
    <ul className="flex items-center space-x-12">
      {links.map((link) => (
        <NextLink
          key={link.slug}
          href={link.url}
          className="text-3xl font-normal"
        >
          {link.label}
        </NextLink>
      ))}
    </ul>
  );
};

export const HeaderComponent = (props: HeaderComponentProps) => {
  const { logo, menu, ctaButton, hero } = props;

  return (
    <header className="h-[80vh] px-12 pt-6">
      <nav className="flex items-center justify-between">
        <LogoComponent {...logo} />
        <HeaderNav links={menu.links} />
        <CtaButtonComponent
          {...ctaButton}
          className="rounded-full px-5 py-3 font-bold"
        />
      </nav>
      <HeroComponent {...hero} />
    </header>
  );
};
