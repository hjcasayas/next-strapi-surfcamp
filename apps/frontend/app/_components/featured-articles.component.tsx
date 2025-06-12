import { FeaturedArticles } from '../_interfaces/featured-articles.interface';
import { cn } from '../_utils/cn.util';

import { FeaturedArticleComponent } from './featured-article.component';

export const FeaturedArticlesComponent = ({
  articles,
  button: { label, bgColorClassName, textColorClassName },
}: FeaturedArticles) => {
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
        {articles.map((article) => (
          <FeaturedArticleComponent key={article.slug} {...article} />
        ))}
      </div>
      <button
        type="button"
        className={cn(
          'inline-block self-center rounded-full px-12 py-4 text-3xl font-bold',
          bgColorClassNameMap[bgColorClassName],
          textColorClassNameMap[textColorClassName]
        )}
      >
        {label}
      </button>
    </div>
  );
};
