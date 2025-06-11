import { HighlightedArticle } from './highlighted-article.interface';
import { Footer } from './footer.interface';
import { Header } from './header.interface';
import { NewsletterForm } from './newsletter-form.interface';
import { Article } from './article.interface';

export interface BlogPageData {
  header: Header;
  footer: Footer;
  highlightedArticle: HighlightedArticle;
  newsletterForm: NewsletterForm;
  featuredArticles: Article[];
}
