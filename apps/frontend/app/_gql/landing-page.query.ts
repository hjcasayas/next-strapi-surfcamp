import { gql } from 'graphql-request';

export const landingPageQuery = gql`
  query LandingPageQuery {
    landingPage {
      header {
        logo {
          image {
            url
            alternativeText
          }
          colorClassName
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
        hero {
          headlines {
            colorClassName
            text
            id
          }
          cover {
            image {
              url
              alternativeText
            }
          }
          ctaButton {
            label
            url
            bgColor
          }
          logo {
            image {
              url
              alternativeText
            }
            colorClassName
          }
        }
      }
      footer {
        logo {
          image {
            url
            alternativeText
          }
          colorClassName
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
      infoBlocks {
        slug
        headline
        content
        image {
          url
          alternativeText
        }
        ctaButton {
          label
          url
          bgColor
        }
        reversed
      }
    }
  }
`;
