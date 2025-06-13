import { Article } from './article.interface';
import { CtaButton } from './cta-button.interface';

export interface HighlightedArticle {
  documentId: string;
  article: Article;
  ctaButton: CtaButton;
}
