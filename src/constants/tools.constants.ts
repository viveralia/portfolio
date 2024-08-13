export type Tool = {
  name: string;
  extension: string;
};

export const tools: Tool[] = [
  {
    extension: ".ts",
    name: "TypeScript",
  },
  {
    extension: ".tsx",
    name: "TypeScript React",
  },
  {
    extension: ".html",
    name: "HTML",
  },
  {
    extension: ".css",
    name: "CSS",
  },
  {
    extension: ".figma",
    name: "Figma",
  },
];
