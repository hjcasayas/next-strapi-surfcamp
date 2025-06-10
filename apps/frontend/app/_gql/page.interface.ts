export interface Logo {
  image: Image;
  colorClassName: 'logo_white' | 'logo_black' | 'logo_orange';
}

export interface Link {
  slug: string;
  label: string;
  url: string;
}

export interface Hero {
  headlines: Headline[];
  cover: Cover;
  ctaButton: CtaButton;
  logo: Logo;
}

export interface Headline {
  id: string;
  text: string;
  colorClassName: 'text_white' | 'text_black';
}

export interface Cover {
  image: Image;
}

export interface CtaButton {
  label: string;
  url: string;
  bgColor: 'bg_turquoise' | 'bg_black' | 'bg_orange';
}

export interface Navigation {
  colorClassName: 'text_white' | 'text_black';
  links: Link[];
}

export interface Header {
  logo: Logo;
  menu: Navigation;
  ctaButton: CtaButton;
  hero: Hero;
}

export interface Footer {
  logo: Logo;
  menu: Navigation;
  policies: Navigation;
  copyright: string;
}

export interface Image {
  url: string;
  alternativeText: string;
}

export interface InfoBlock {
  slug: string;
  headline: string;
  content: string;
  image: Image;
  ctaButton?: CtaButton | null;
  reversed: boolean;
}
export interface Page {
  header: Header;
  footer: Footer;
  infoBlocks: InfoBlock[];
}
