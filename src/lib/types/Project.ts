import type { Tool } from "./tool";

export type Project = {
  name: string;
  description: string;
  hostedUrl: string;
  repoUrl: string;
  techStack: Tool[];
};
