import { BlogPageComponent } from '../_components/pages/blog-page.component';
import { getQueryClient } from '../_utils/react-query.util';
import { graphqlRequest } from '../_gql/graphql-request';
import { blogPageQuery } from '../_gql/blog-page.query';

export default async function BlogPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['blogPage'],
    queryFn: () => graphqlRequest(blogPageQuery),
  });

  return <BlogPageComponent />;
}
