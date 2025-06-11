import { Article } from './article.interface';
import { Footer } from './footer.interface';
import { Header } from './header.interface';

export interface BlogPageData {
  header: Header;
  footer: Footer;
  highlightedArticle: Article;
}
