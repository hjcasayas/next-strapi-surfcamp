import NextImage from 'next/image';

import Markdown from 'react-markdown';

import { imageLoaderProp } from '../_utils/image-loader-prop.util';
import { CtaButtonComponent } from './cta-button.component';
import { InfoBlock } from '../_gql/landing-page.interface';
import { cn } from '../_utils/cn.util';

export const InfoBlockComponent = ({
  image,
  headline,
  content,
  ctaButton,
  reversed,
}: Omit<InfoBlock, 'slug'>) => {
  return (
    <div
      className={cn(
        'relative flex justify-center gap-x-11',
        reversed ? 'flex-row-reverse' : 'flex-row'
      )}
    >
      <div className="relative h-auto w-1/2">
        <NextImage
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
          alt={image.alternativeText}
          className={cn(
            'object-cover object-center',
            reversed ? 'info-block-image-clip-reverse' : 'info-block-image-clip'
          )}
          sizes="100%"
          loader={imageLoaderProp}
          fill
        />
      </div>
      <div
        className={cn(
          'flex w-1/2 flex-col items-start justify-between gap-y-8 py-15',
          reversed ? 'pl-12' : 'pr-12'
        )}
      >
        <h2 className="text-[80px]">{headline}</h2>
        <Markdown>{content}</Markdown>
        <CtaButtonComponent {...ctaButton} className="px-5 py-3 text-2xl" />
      </div>
    </div>
  );
};
