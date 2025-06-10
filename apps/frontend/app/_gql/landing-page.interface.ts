export interface Logo {
  image: Image;
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
  image: Image;
}

export interface CtaButton {
  label: string;
  url: string;
  bgColor: 'bg_turquoise' | 'bg_black' | 'bg_orange';
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

export interface Image {
  url: string;
  alternativeText: string;
}

export interface InfoBlock {
  slug: string;
  headline: string;
  content: string;
  image: Image;
  ctaButton: CtaButton;
  direction: 'flex_row' | 'flex_row_reverse';
  imageClipDirection: 'info_block_image_clip' | 'info_block_image_clip_reverse';
}
export interface LandingPageData {
  landingPage: {
    header: Header;
    footer: Footer;
    infoBlocks: InfoBlock[];
  };
}
