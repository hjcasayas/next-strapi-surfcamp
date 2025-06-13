'use client';

import { useState } from 'react';

import { FeaturedArticles } from '@/interfaces/featured-articles.interface';
import { cn } from '@/utils/cn.util';

import { FeaturedArticleComponent } from './featured-article.component';

export const FeaturedArticlesComponent = ({
  articles,
  button: { label, bgColorClassName, textColorClassName },
}: FeaturedArticles) => {
  const [numberOfArticles, setNumberOfArticles] = useState(3);

  const handleClick = () => {
    setNumberOfArticles((prev) => {
      if (prev + 3 > articles.length) {
        return articles.length;
      }

      return prev + 3;
    });
  };

  const textColorClassNameMap: Record<string, string> = {
    text_white: 'text-white',
    text_black: 'text-black',
  };

  const bgColorClassNameMap: Record<string, string> = {
    bg_turquoise: 'bg-turquoise',
    bg_black: 'bg-black',
    bg_orange: 'bg-orange',
    bg_brown: 'bg-brown',
  };

  return (
    <div className="flex flex-col gap-y-[60px]">
      <h2 className="text-6xl">Featured Articles</h2>
      <div className="grid grid-cols-3 gap-x-[3%] gap-y-[4%]">
        {articles.slice(0, numberOfArticles).map((article) => (
          <FeaturedArticleComponent key={article.slug} {...article} />
        ))}
      </div>
      {numberOfArticles < articles.length ? (
        <button
          onClick={handleClick}
          type="button"
          className={cn(
            'inline-block self-center rounded-full px-12 py-4 text-3xl font-bold',
            bgColorClassNameMap[bgColorClassName],
            textColorClassNameMap[textColorClassName]
          )}
        >
          {label}
        </button>
      ) : null}
    </div>
  );
};
