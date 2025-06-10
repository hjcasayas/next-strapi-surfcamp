import { ImageLoader } from 'next/image';

export const imageLoaderProp: ImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
