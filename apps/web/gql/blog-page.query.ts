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
        article {
          documentId
          slug
          title
          body
          image {
            alternativeText
            url
          }
        }
        ctaButton {
          bgColor
          label
          url
        }
      }
      newsletterForm {
        title
        description
        inputPlaceholder
        buttonLabel
      }
      featuredArticles {
        articles {
          documentId
          slug
          title
          body
          image {
            url
            alternativeText
          }
          publishedDate
        }
        button {
          label
          textColorClassName
          bgColorClassName
        }
      }
    }
  }
`;
