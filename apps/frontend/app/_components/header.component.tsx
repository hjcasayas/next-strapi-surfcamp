import { Header } from '../_gql/page.interface';
import { NavigationComponent } from './navigation.component';
import { LogoComponent } from './logo.component';
import { HeaderNav } from './header-nav.component';
import { CtaButtonComponent } from './cta-button.component';
import { HeroComponent } from './hero.component';

export const HeaderComponent = ({ logo, menu, ctaButton, hero }: Header) => {
  return (
    <header className="relative top-0 right-0 left-0">
      <NavigationComponent>
        <div className="relative h-20 w-12">
          <LogoComponent {...logo} />
        </div>
        <HeaderNav {...menu} />
        <CtaButtonComponent
          {...ctaButton}
          className="rounded-full px-5 py-3 text-2xl"
        />
      </NavigationComponent>
      <HeroComponent {...hero} />
    </header>
  );
};
