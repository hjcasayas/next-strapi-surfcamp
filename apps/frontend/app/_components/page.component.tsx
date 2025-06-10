import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { InfoBlocksComponent } from './info-blocks.component';
import { Page } from '../_gql/page.interface';

export const PageComponent = ({ header, infoBlocks, footer }: Page) => {
  return (
    <>
      <HeaderComponent {...header} />
      <main>
        <InfoBlocksComponent infoBlocks={infoBlocks} />
      </main>
      <FooterComponent {...footer} />
    </>
  );
};
