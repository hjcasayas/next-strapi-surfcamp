import { PropsWithChildren } from 'react';

export const HeroComponent = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative flex h-full flex-1 flex-col items-start justify-center px-12 pt-56 pb-32">
      {children}
    </div>
  );
};
