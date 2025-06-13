import { LandingPageComponent } from '@/components/pages/landing-page.component';
import { graphqlRequest } from '@/gql/graphql-request';
import { landingPageQuery } from '@/gql/landing-page.query';
import { getQueryClient } from '@/utils/react-query.util';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default async function LandingPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['landingPage'],
    queryFn: () => graphqlRequest(landingPageQuery),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LandingPageComponent />
    </HydrationBoundary>
  );
}
