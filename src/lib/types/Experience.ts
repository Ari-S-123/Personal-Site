import type { Tool } from "./tool";

export type Experience = {
  title: string;
  organization: string;
  description: string[];
  startDate: string;
  endDate: string;
  techStack: Tool[];
};
