import { PropsWithChildren } from 'react';

export const HeaderComponent = ({ children }: PropsWithChildren) => {
  return <header className="relative top-0 right-0 left-0">{children}</header>;
};
