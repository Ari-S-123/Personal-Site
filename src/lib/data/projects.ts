import type { Project } from "$lib/types/Project";
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
  css,
  nextJS,
  react,
  shadCn,
  prisma,
  liveblocks,
  neon,
  clerk,
  ai
} from "$lib/data/tools";

const poemPortal: Project = {
  name: "PoemPortal",
  description:
    "Writer's block? Or just bored? Read a random poem because why not. PoemPortal is an app that surprises poetry enthusiasts with a random poem. You can login and save your favorites too.",
  hostedUrl: "https://poemportal.vercel.app",
  repoUrl: "https://github.com/Ari-S-123/Poem-Portal",
  techStack: [
    typeScript,
    svelteKit,
    tailwind,
    shadCnSvelte,
    vite,
    vitest,
    svelteTestingLibrary,
    supabase,
    drizzle,
    vercel
  ]
};

const storyWeaver: Project = {
  name: "StoryWeaver",
  description:
    "The greatest place to write your next story. StoryWeaver is a pioneering collaborative fiction platform that harnesses real-time multi-user editing and AI-powered narrative generation.",
  hostedUrl: "https://storyweaver-next.vercel.app",
  repoUrl: "https://github.com/Ari-S-123/story-weaver",
  techStack: [typeScript, react, nextJS, tailwind, shadCn, prisma, neon, clerk, liveblocks, ai, vercel]
};

const videoGameSalesDataviz: Project = {
  name: "Video game sales over the years",
  description:
    "Global video game sales as a whole have increased drastically from the 1980s to the 2000s but have slumped in the early 2010s to nearly half their peak of 650 million USD from circa 2008.",
  hostedUrl: "https://observablehq.com/d/c14ca2dfaaa67147",
  repoUrl: "",
  techStack: [d3, html, css, javaScript]
};

const tEdAndLifeExpDataviz: Project = {
  name: "Correlation between Tertiary Education & Life Expectancy",
  description:
    "Evidence for a strong positive correlation between tertiary education completion rate and life expectancy in OECD member countries.",
  hostedUrl: "https://observablehq.com/d/b5f311ca3633ad0b",
  repoUrl: "",
  techStack: [vegaLiteAPI, html, css, javaScript]
};

const mathEStudentPerformanceDataviz: Project = {
  name: "MathE Student Performance",
  description:
    "Slovenian and Romanian students performed better than their European peers on the MathE online platform.",
  hostedUrl: "https://observablehq.com/d/d71f9c25002e1840",
  repoUrl: "",
  techStack: [vegaLiteAPI, html, css, javaScript]
};

const intFootballMeanGoalsDataviz: Project = {
  name: "Mean Goals per match in International Football",
  description: "Mean Goals per match have decreased ~40% since the first FIFA World Cup.",
  hostedUrl: "https://observablehq.com/d/f13a4d1ffabf55a0",
  repoUrl: "",
  techStack: [vegaLiteAPI, html, css, javaScript]
};

const f1DriverTitleContributionsDataviz: Project = {
  name: "F1 Driver Title Contributions",
  description: "Ferrari has the highest number (9) of distinct drivers' champions in the history of F1.",
  hostedUrl: "https://observablehq.com/d/b2777edd3d8bd091",
  repoUrl: "",
  techStack: [d3, html, css, javaScript]
};

const f1MeanFinishingPositionByCountryDataviz: Project = {
  name: "Mean Finishing Position of F1 Drivers by Country",
  description: "Poland has the best mean driver finishing position in F1 at 10.65 thanks to Robert Kubica.",
  hostedUrl: "https://observablehq.com/d/675f5d1449cebd1c",
  repoUrl: "",
  techStack: [vegaLiteAPI, html, css, javaScript]
};

const f1DatavizFall2024: Project = {
  name: "Visualizing the Evolution of Formula One Performance Metrics (1950-2024)",
  description:
    "Mercedes has the best (lowest) mean finishing position in a given season of all time of 3.17 in 2017. " +
    "Zakspeed has the worst (highest) mean finishing position in a given season of\n" +
    "  all time of 35.03 in 1989.",
  hostedUrl: "https://ari-s-123.github.io/F1-Dataviz-Fall-2024",
  repoUrl: "https://github.com/Ari-S-123/F1-Dataviz-Fall-2024",
  techStack: [vegaLiteAPI, d3, html, css, javaScript]
};

const aiDataStoryGenerator: Project = {
  name: "Interactive Data Story Generator",
  description:
    "An AI-powered data exploration tool on Observable that allows users to generate visualization code and useful insights quickly.",
  hostedUrl: "https://observablehq.com/d/5440c743ff8be0de",
  repoUrl: "",
  techStack: [javaScript, html, css]
};

export const webDevProjects: Project[] = [storyWeaver, poemPortal];
export const dataVizProjects: Project[] = [
  aiDataStoryGenerator,
  f1DatavizFall2024,
  f1MeanFinishingPositionByCountryDataviz,
  f1DriverTitleContributionsDataviz,
  intFootballMeanGoalsDataviz,
  mathEStudentPerformanceDataviz,
  tEdAndLifeExpDataviz,
  videoGameSalesDataviz
];
