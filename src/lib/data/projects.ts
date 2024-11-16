import type { Project } from '$lib/types/Project';
import {
	svelteKit,
	tailwind,
	shadCnSvelte,
	vitest,
	vite,
	svelteTestingLibrary,
	supabase,
	drizzle,
	typeScript,
	vercel,
	d3,
	vegaLiteAPI,
	javaScript,
	html,
	css
} from '$lib/data/tools';

const poemPortal: Project = {
	name: 'Poem Portal',
	description:
		"Writer's block? Or just bored? Read a random poem because why not. Poem Portal is an app that surprises poetry enthusiasts with a random poem. You can login and save your favorites too.",
	hostedUrl: 'https://poemportal.vercel.app',
	repoUrl: 'https://github.com/Ari-S-123/Poem-Portal',
	techStack: [
		svelteKit,
		tailwind,
		css,
		html,
		shadCnSvelte,
		vitest,
		vite,
		svelteTestingLibrary,
		supabase,
		drizzle,
		typeScript,
		javaScript,
		vercel
	]
};

const videoGameSalesDataviz: Project = {
	name: 'Video game sales over the years',
	description:
		'Global video game sales as a whole have increased drastically from the 1980s to the 2000s but have slumped in the early 2010s to nearly half their peak of 650 million USD from circa 2008.',
	hostedUrl: 'https://observablehq.com/d/c14ca2dfaaa67147',
	repoUrl: '',
	techStack: [d3, html, css, javaScript]
};

const tEdAndLifeExpDataviz: Project = {
	name: 'Correlation between Tertiary Education & Life Expectancy',
	description:
		'Evidence for a strong positive correlation between tertiary education completion rate and life expectancy in OECD member countries.',
	hostedUrl: 'https://observablehq.com/d/b5f311ca3633ad0b',
	repoUrl: '',
	techStack: [vegaLiteAPI, html, css, javaScript]
};

const mathEStudentPerformanceDataviz: Project = {
	name: 'MathE Student Performance',
	description:
		'Slovenian and Romanian students performed better than their European peers on the MathE online platform.',
	hostedUrl: 'https://observablehq.com/d/d71f9c25002e1840',
	repoUrl: '',
	techStack: [vegaLiteAPI, html, css, javaScript]
};

const intFootballMeanGoalsDataviz: Project = {
	name: 'Mean Goals per match in International Football',
	description: 'Mean Goals per match have decreased ~40% since the first FIFA World Cup.',
	hostedUrl: 'https://observablehq.com/d/f13a4d1ffabf55a0',
	repoUrl: '',
	techStack: [vegaLiteAPI, html, css, javaScript]
};

const f1DriverTitleContributionsDataviz: Project = {
	name: 'F1 Driver Title Contributions',
	description:
		"Ferrari has the highest number (9) of distinct drivers' champions in the history of F1.",
	hostedUrl: 'https://observablehq.com/d/b2777edd3d8bd091',
	repoUrl: '',
	techStack: [d3, html, css, javaScript]
};

const f1MeanFinishingPositionByCountryDataviz: Project = {
	name: 'Mean Finishing Position of F1 Drivers by Country',
	description:
		'Poland has the best mean driver finishing position in F1 at 10.65 thanks to Robert Kubica.',
	hostedUrl: 'https://observablehq.com/d/675f5d1449cebd1c',
	repoUrl: '',
	techStack: [vegaLiteAPI, html, css, javaScript]
};

export const webDevProjects: Project[] = [poemPortal];
export const dataVizProjects: Project[] = [
	f1MeanFinishingPositionByCountryDataviz,
	f1DriverTitleContributionsDataviz,
	intFootballMeanGoalsDataviz,
	mathEStudentPerformanceDataviz,
	tEdAndLifeExpDataviz,
	videoGameSalesDataviz
];
