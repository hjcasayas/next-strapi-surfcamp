import { gql } from 'graphql-request';

export const landingPageQuery = gql`
  query LandingPageQuery {
    landingPage {
      header {
        logo {
          image {
            url
            width
            height
          }
          altText
        }
        menu {
          links {
            slug
            url
            label
          }
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
          logo {
            image {
              url
              width
              height
            }
            altText
          }
        }
      }
      footer {
        logo {
          altText
          image {
            url
            width
            height
          }
        }
        menu {
          links {
            slug
            label
            url
          }
        }
        policies {
          links {
            slug
            label
            url
          }
        }
        copyright
      }
    }
  }
`;
