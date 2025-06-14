import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { getQueryClient } from '@/utils/react-query.util';

import { graphqlRequest } from '@/gql/graphql-request';
import { blogPageQuery } from '@/gql/blog-page.query';
import { BlogPageComponent } from '@/components/pages/blog-page.component';

export default async function BlogPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['blogPage'],
    queryFn: () => graphqlRequest(blogPageQuery),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BlogPageComponent />
    </HydrationBoundary>
  );
}
