export type Project = {
  name: string;
  description: string;
  website: string;
  repoUrl: string | null;
  topics: {
    name: string;
  }[];
};
