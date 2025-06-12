import { ExperiencePageComponent } from '../_components/pages/experience-page.component';
import { experiencePageQuery } from '../_gql/experience-page.query';
import { graphqlRequest } from '../_gql/graphql-request';
import { getQueryClient } from '../_utils/react-query.util';

export default async function ExperiencePage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['experiencePage'],
    queryFn: () => graphqlRequest(experiencePageQuery),
  });

  return <ExperiencePageComponent />;
}
