import { gql } from 'graphql-request';

export const landingPageQuery = gql`
  query LandingPageQuery {
    landingPage {
      header {
        logo {
          image {
            url
          }
          alt
        }
        menu {
          label
          url
        }
        ctaButton {
          label
          url
          bgColor
        }
        hero {
          headings {
            text
          }
          cover {
            image {
              url
            }
            alt
          }
          ctaButton {
            label
            url
            bgColor
          }
        }
      }
    }
  }
`;
