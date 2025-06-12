import { Image } from './image.interface';

export interface Article {
  documentId: string;
  slug: string;
  title: string;
  body: string;
  image: Image;
  publishedDate: string;
}
