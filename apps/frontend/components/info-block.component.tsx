import React from 'react';

import NextImage from 'next/image';
import Markdown from 'react-markdown';

import { imageLoaderProp } from '@/utils/image-loader-prop.util';
import { cn } from '@/utils/cn.util';

import { InfoBlock } from '@/interfaces/info-block.interface';

import { CtaButtonComponent } from './cta-button.component';

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
          alt={image.alternativeText ?? ''}
          className={cn(
            'object-cover object-center',
            reversed ? 'rounded-l-full' : 'rounded-r-full'
          )}
          sizes="100%"
          loader={imageLoaderProp}
          fill
        />
      </div>
      <div
        className={cn(
          'py-15 flex w-1/2 flex-col items-start justify-between gap-y-8',
          reversed ? 'pl-12' : 'pr-12'
        )}
      >
        <h2 className="text-[80px]">{headline}</h2>
        <Markdown>{content}</Markdown>
        {ctaButton != null ? (
          <CtaButtonComponent {...ctaButton} className="px-5 py-3 text-2xl" />
        ) : null}
      </div>
    </div>
  );
};
