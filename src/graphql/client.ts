import { GraphQLClient } from 'graphql-request'

export const githubGqlUrl = 'https://api.github.com/graphql'

export const client = new GraphQLClient(githubGqlUrl, {
  headers: {
    authorization: `Bearer ${import.meta.env.GITHUB_PERSONAL_ACCESS_TOKEN}`
  }
})
