export interface Logo {
  image: {
    url: string;
  };
  altText: string;
}

export interface MenuItem {
  id: string;
  label: string;
  url: string;
}

export interface Hero {
  headings: Heading[];
  cover: Cover;
  ctaButton: CtaButton;
}

export interface Heading {
  id: string;
  text: string;
}

export interface Cover {
  image: {
    url: string;
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
  menu: MenuItem[];
  ctaButton: CtaButton;
  hero: Hero;
}

export interface Footer {
  logo: Logo;
  menu: MenuItem[];
  policies: MenuItem[];
  copyright: string;
}

export interface LandingPageData {
  landingPage: {
    header: Header;
    footer: Footer;
  };
}
