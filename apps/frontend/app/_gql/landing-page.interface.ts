export interface Logo {
  image: {
    url: string;
    width: number;
    height: number;
    alternativeText: string;
  };
}

export interface Link {
  slug: string;
  label: string;
  url: string;
}

export interface Hero {
  headings: Heading[];
  cover: Cover;
  ctaButton: CtaButton;
  logo: Logo;
}

export interface Heading {
  id: string;
  text: string;
}

export interface Cover {
  image: {
    url: string;
    alternativeText: string;
  };
  altText: string;
}

export interface CtaButton {
  label: string;
  url: string;
  bgColor: 'turquoise' | 'black' | 'orange';
}

export interface Header {
  logo: Logo;
  menu: {
    links: Link[];
  };
  ctaButton: CtaButton;
  hero: Hero;
}

export interface Footer {
  logo: Logo;
  menu: {
    links: Link[];
  };
  policies: {
    links: Link[];
  };
  copyright: string;
}

export interface LandingPageData {
  landingPage: {
    header: Header;
    footer: Footer;
  };
}
