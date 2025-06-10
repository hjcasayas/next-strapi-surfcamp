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
            alternativeText
          }
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
              width
              height
              alternativeText
            }
          }
        }
      }
      footer {
        logo {
          image {
            url
            width
            height
            alternativeText
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
      info_blocks {
        slug
        title
        description
        image {
          url
          alternativeText
        }
        ctaButton {
          id
          label
          url
          bgColor
        }
        direction
      }
    }
  }
`;
