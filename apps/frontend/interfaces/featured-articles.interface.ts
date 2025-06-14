import { Article } from './article.interface';
import { SimpleButton } from './simple-button.interface';

export interface FeaturedArticles {
  articles: Article[];
  button: SimpleButton;
}
