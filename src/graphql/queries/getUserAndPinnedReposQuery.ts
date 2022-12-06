import { gql } from 'graphql-request'

export interface GetUserAndPinnedReposQuery {
  user: {
    company: string;
    email: string;
    location: string;
    name: string;
    pinnedItems: {
      edges: {
        node: {
          name: string;
          description: string;
          repoUrl: string;
          website: string;
          repositoryTopics: {
            edges: {
              node: {
                topic: {
                  name: string
                }
              }
            }[]
          };
        }
      }[];
      totalCount: number;
    };
  };
}

export const getUserAndPinnedReposQuery = gql`
  query getUserAndPinnedReposQuery($username: String!) {
    user(login: $username) {
      company
      email
      location
      name
      pinnedItems(first: 6) {
        edges {
          node {
            ... on Repository {
              name
              description
              repoUrl: url
              website: homepageUrl
              repositoryTopics(first: 4) {
                edges {
                  node {
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
        totalCount
      }
    }
  }
`