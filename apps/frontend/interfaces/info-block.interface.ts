import { CtaButton } from './cta-button.interface';
import { Image } from './image.interface';

export interface InfoBlock {
  slug: string;
  headline: string;
  content: string;
  image: Image;
  ctaButton?: CtaButton | null;
  reversed: boolean;
}
