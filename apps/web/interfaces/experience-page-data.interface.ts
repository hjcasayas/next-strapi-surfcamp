import { Footer } from './footer.interface';
import { Header } from './header.interface';
import { InfoBlock } from './info-block.interface';

export interface ExperiencePageData {
  header: Header;
  footer: Footer;
  infoBlocks: InfoBlock[];
}
