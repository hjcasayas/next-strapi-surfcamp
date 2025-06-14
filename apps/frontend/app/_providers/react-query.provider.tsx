'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { getQueryClient } from '../_utils/react-query.util';

export const ReactQueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient] = useState(() => getQueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
