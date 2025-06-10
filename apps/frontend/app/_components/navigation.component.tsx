import { PropsWithChildren } from 'react';

export const NavigationComponent = ({ children }: PropsWithChildren) => {
  return (
    <nav className="absolute top-0 right-0 left-0 z-20 flex items-center justify-between px-12 pt-6">
      {children}
    </nav>
  );
};
