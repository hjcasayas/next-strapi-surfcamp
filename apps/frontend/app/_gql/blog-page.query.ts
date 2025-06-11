import { gql } from 'graphql-request';

export const blogPageQuery = gql`
  query BlogPageQuery {
    blogPage {
      header {
        logo {
          image {
            url
            alternativeText
          }
        }
        menu {
          links {
            slug
            url
            label
          }
          colorClassName
        }
        ctaButton {
          label
          url
          bgColor
        }
      }
      footer {
        logo {
          image {
            url
            alternativeText
          }
        }
        menu {
          links {
            slug
            label
            url
          }
          colorClassName
        }
        policies {
          links {
            slug
            label
            url
          }
          colorClassName
        }
        copyright
      }
      highlightedArticle {
        slug
        title
        body
        image {
          url
          alternativeText
        }
      }
    }
  }
`;
