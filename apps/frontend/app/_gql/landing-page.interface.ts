export interface Logo {
  image: {
    url: string;
  };
  alt: string;
}

export interface MenuItem {
  label: string;
  url: string;
}

export interface Hero {
  headings: Heading[];
  cover: Cover;
  ctaButton: CtaButton;
}

export interface Heading {
  text: string;
}

export interface Cover {
  image: {
    url: string;
  };
  alt: string;
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

export interface LandingPageData {
  landingPage: {
    header: Header;
  };
}
