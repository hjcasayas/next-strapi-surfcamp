import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { graphqlRequest } from './_gql/graphql-request';
import { landingPageQuery } from './_gql/landing-page.query';
import { getQueryClient } from './_utils/react-query.util';
import { LandingPageComponent } from './_components/pages/landing-page/landing-page.component';

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
