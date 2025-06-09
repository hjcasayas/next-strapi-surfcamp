import Link from 'next/link';
import { MenuItem } from '../_gql/landing-page.interface';

type MenuItemProps = MenuItem;

const MenuItemComponent = ({ label, url }: MenuItemProps) => {
  return (
    <li>
      <Link href={url}>{label}</Link>
    </li>
  );
};

interface MenuComponentProps {
  menuItems: MenuItem[];
}

export const MenuComponent = ({ menuItems }: MenuComponentProps) => {
  return (
    <ul className="flex items-center space-x-12 text-3xl">
      {menuItems.map((item) => (
        <MenuItemComponent key={item.url} {...item} />
      ))}
    </ul>
  );
};
