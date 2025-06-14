import { gql } from 'graphql-request';

export const experiencePageQuery = gql`
  query ExperiencePageQuery {
    experiencePage {
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
          }
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
