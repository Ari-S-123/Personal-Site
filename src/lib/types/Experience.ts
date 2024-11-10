import type { Tool } from '$lib/types/Tool';

export type Experience = {
	title: string;
	organization: string;
	description: string[];
	startDate: string;
	endDate: string;
	techStack: Tool[];
};
