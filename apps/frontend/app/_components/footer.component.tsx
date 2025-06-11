import { Footer } from '../_interfaces/footer.interface';

import { LogoComponent } from './logo.component';
import { FooterNav } from './footer-nav.component';
import { PolicyNav } from './policy-nav';

type FooterComponentProps = Footer;

export const FooterComponent = ({
  logo,
  menu,
  policies,
  copyright,
}: FooterComponentProps) => {
  return (
    <footer className="flex flex-col space-y-8 bg-black px-11 pt-20 pb-11 text-white">
      <div className="flex items-center justify-between">
        <div className="relative h-32 w-20">
          <LogoComponent {...logo} />
        </div>
        <FooterNav {...menu} />
      </div>
      <div className="flex items-center justify-between">
        <PolicyNav {...policies} />
        <span className="text-xl font-normal">{copyright}</span>
      </div>
    </footer>
  );
};
