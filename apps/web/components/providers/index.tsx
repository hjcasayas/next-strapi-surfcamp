import { PropsWithChildren } from 'react';
import { ReactQueryProvider } from './react-query.provider';

export const Providers = ({ children }: PropsWithChildren) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
