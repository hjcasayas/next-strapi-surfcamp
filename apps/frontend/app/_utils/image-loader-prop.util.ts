import { ImageLoader } from 'next/image';

export const imageLoaderProp: ImageLoader = ({ src }) => {
  return src;
};
