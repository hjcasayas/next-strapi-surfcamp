import { CtaButton } from './cta-button.interface';
import { Image } from './image.interface';
import { Logo } from './logo.interface';
import { Navigation } from './navigation.interface';

export interface Cover {
  image: Image;
}

export interface Headline {
  id: string;
  text: string;
  colorClassName: 'text_white' | 'text_black';
}

export interface Hero {
  headlines: Headline[];
  cover: Cover;
  ctaButton: CtaButton;
  logo: Logo;
}

export interface Header {
  logo: Logo;
  menu: Navigation;
  ctaButton: CtaButton;
  hero?: Hero | null;
}
