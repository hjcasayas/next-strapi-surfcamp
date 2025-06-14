import { ExperiencePageComponent } from '@/components/pages/experience-page.component';
import { experiencePageQuery } from '@/gql/experience-page.query';
import { graphqlRequest } from '@/gql/graphql-request';
import { getQueryClient } from '@/utils/react-query.util';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default async function ExperiencePage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['experiencePage'],
    queryFn: () => graphqlRequest(experiencePageQuery),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ExperiencePageComponent />
    </HydrationBoundary>
  );
}
