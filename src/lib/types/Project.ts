import type { Tool } from '$lib/types/Tool';

export type Project = {
	name: string;
	description: string;
	hostedUrl: string;
	repoUrl: string;
	techStack: Tool[];
};
