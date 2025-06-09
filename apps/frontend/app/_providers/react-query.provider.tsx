'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useState } from 'react';
import { getQueryClient } from '../_utils/react-query.util';

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => getQueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
