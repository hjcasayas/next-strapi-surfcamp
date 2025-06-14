import { Article } from '@/interfaces/article.interface';

import {
  FeaturedItemContainerComponent,
  FeaturedItemDateComponent,
  FeaturedItemImageComponent,
  FeaturedItemTitleComponent,
} from './featured-item';

export const FeaturedArticleComponent = ({
  documentId,
  title,
  image,
  publishedDate,
}: Article) => {
  return (
    <FeaturedItemContainerComponent href={`/blog/${documentId}`}>
      <FeaturedItemImageComponent {...image} />
      <div className="flex flex-1 flex-col justify-between gap-y-4 px-8 pb-9 pt-5">
        <FeaturedItemTitleComponent title={title} />
        <FeaturedItemDateComponent date={publishedDate} />
      </div>
    </FeaturedItemContainerComponent>
  );
};
