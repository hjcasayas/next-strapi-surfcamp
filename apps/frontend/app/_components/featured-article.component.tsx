import { Article } from '../_interfaces/article.interface';
import {
  FeaturedItemContainerComponent,
  FeaturedItemDateComponent,
  FeaturedItemImageComponent,
  FeaturedItemTitleComponent,
} from './featured-item';

export const FeaturedArticleComponent = ({
  slug,
  title,
  image,
  publishedDate,
}: Article) => {
  return (
    <FeaturedItemContainerComponent href={`/blogs/${slug}`}>
      <FeaturedItemImageComponent {...image} />
      <div className="flex flex-1 flex-col justify-between gap-y-4 px-8 pt-5 pb-9">
        <FeaturedItemTitleComponent title={title} />
        <FeaturedItemDateComponent date={publishedDate} />
      </div>
    </FeaturedItemContainerComponent>
  );
};
