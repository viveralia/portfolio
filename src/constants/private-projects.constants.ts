import type { Project } from "../models";

export const privateProjects: Project[] = [
  {
    name: "Colorista",
    description:
      "An app to find your best looking colors (colorimetry season) based on a selfie and the power of AI.",
    topics: [
      { name: "nextjs" },
      { name: "mongodb" },
      { name: "gpt-4o" },
      { name: "rsc" },
      { name: "aws" },
    ],
    repoUrl: null,
    website: "https://colorista.me",
  },
  {
    name: "Necta",
    description:
      "A platform to connect the best marketing agencies in LATAM with companies looking for their services.",
    topics: [
      { name: "nextjs" },
      { name: "mongodb" },
      { name: "stripe" },
      { name: "aws" },
    ],
    repoUrl: null,
    website: "https://necta.me",
  },
];
