import { client, getUserAndPinnedReposQuery, type GetUserAndPinnedReposQuery } from '../graphql'
import type { Project, User } from "../models"

type GetUserAndPinnedRepos = (username: string) => Promise<{
  user: {
    name: User['name'],
    company: User['company'],
    totalProjects: number
    projects: Project[]
  }
}>

export const getUserDataAndPinnedRepos: GetUserAndPinnedRepos = async (username) => {
  const { user } = await client.request<GetUserAndPinnedReposQuery>(
    getUserAndPinnedReposQuery,
    { username }
  )

  return {
    user: {
      name: user.name,
      company: user.company,
      totalProjects: user.pinnedItems.totalCount,
      projects: user.pinnedItems.edges.map(({ node }) => ({
        ...node,
        name: node.name.replaceAll('-', ' '),
        topics: node.repositoryTopics.edges.map(({ node }) => ({
          name: node.topic.name.replaceAll('-', ' ')
        }))
      }))
    }
  }
}
