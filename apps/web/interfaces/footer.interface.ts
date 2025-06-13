import { Logo } from './logo.interface';
import { Navigation } from './navigation.interface';

export interface Footer {
  logo: Logo;
  menu: Navigation;
  policies: Navigation;
  copyright: string;
}
