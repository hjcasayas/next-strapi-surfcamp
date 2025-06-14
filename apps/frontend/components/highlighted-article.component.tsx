import React from 'react';

import Image from 'next/image';
import MarkDown from 'react-markdown';

import { CtaButtonComponent } from './cta-button.component';
import { HighlightedArticle } from '@/interfaces/highlighted-article.interface';
import { imageLoaderProp } from '@/utils/image-loader-prop.util';

export const HighlightedArticleComponent = ({
  article,
  ctaButton,
}: HighlightedArticle) => {
  const {
    title,
    body,
    image: { url, alternativeText },
    documentId,
  } = article;

  return (
    <div className="flex justify-between gap-x-10">
      <div className="flex w-1/2 flex-col items-start space-y-8 pt-4">
        <h1 className="text-6xl">{title}</h1>
        <div className="flex flex-col space-y-5 text-xl">
          <MarkDown>{body}</MarkDown>
        </div>
        <CtaButtonComponent
          {...{ ...ctaButton, url: `${ctaButton.url}/${documentId}` }}
          className="px-10 py-4 text-3xl"
        />
      </div>
      <div className="relative w-1/2">
        <Image
          className="rounded-[40px] object-cover object-center"
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
          loader={imageLoaderProp}
          alt={alternativeText ?? ''}
          sizes="100%"
          priority
          fill
        />
      </div>
    </div>
  );
};
