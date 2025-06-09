import { gql } from 'graphql-request';

export const landingPageQuery = gql`
  query LandingPageQuery {
    landingPage {
      header {
        logo {
          image {
            url
          }
          altText
        }
        menu {
          label
          url
          label
        }
        ctaButton {
          label
          url
          bgColor
        }
        hero {
          headings {
            text
            id
          }
          cover {
            image {
              url
            }
            altText
          }
          ctaButton {
            label
            url
            bgColor
          }
        }
      }
      footer {
        logo {
          altText
          image {
            url
          }
        }
        menu {
          id
          label
          url
        }
        policies {
          id
          label
          url
        }
        copyright
      }
    }
  }
`;
