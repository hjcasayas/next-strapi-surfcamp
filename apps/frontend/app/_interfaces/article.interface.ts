import { Image } from './image.interface';

export interface Article {
  slug: string;
  title: string;
  body: string;
  image: Image;
  publishedDate: string;
}
