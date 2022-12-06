export interface Project {
  name: string
  description: string
  website: string
  repoUrl: string
  topics: {
    name: string
  }[]
}
