import { useQuery } from '@tanstack/react-query';
import { graphqlRequest } from '../_gql/graphql-request';
import { landingPageQuery } from '../_gql/landing-page.query';
import { LandingPageData } from '../_gql/landing-page.interface';

export const useLandingPageQuery = () => {
  return useQuery<LandingPageData>({
    queryKey: ['landingPage'],
    queryFn: () => graphqlRequest(landingPageQuery),
  });
};
