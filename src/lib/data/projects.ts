import type { Project } from "$lib/types";
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
  ai,
  v0,
  resend,
  postgres,
  apify,
  redpanda,
  openai,
  convex,
  workOs,
  anthropic,
  daytona,
  python,
  pytorch,
  aws,
  vanta,
  go,
  terraform,
  raft,
  peft,
  gemini,
  googleMaps,
  gsap,
  zustand,
  wavefile,
  webAudioAPI,
  modal
} from "./tools";

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

const infiniteApps: Project = {
  name: "Infinite Applications",
  description:
    "Experience the absurdity of modern tech recruiting. Watch as a developer attempts to apply for jobs with impossible requirements—one rejection at a time.",
  hostedUrl: "https://infinite-apps.vercel.app",
  repoUrl: "https://github.com/Ari-S-123/infinite-apps",
  techStack: [v0, nextJS, react, tailwind, shadCn, typeScript]
};

const mixSmart: Project = {
  name: "MixSmart",
  description: "Coming Soon 👀",
  hostedUrl: "",
  repoUrl: "",
  techStack: []
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

const mailSplit: Project = {
  name: "MailSplit",
  description:
    "A modern support email management dashboard with emails automatically assigned to the most appropriate team using RAG.",
  hostedUrl: "",
  repoUrl: "https://github.com/SUPATEAM-2025/mailsplit",
  techStack: [typeScript, react, nextJS, tailwind, shadCn, resend, supabase, postgres]
};
const antiVenom: Project = {
  name: "AntiVenom",
  description:
    "Automated self-improving defense pattern generation against ever-evolving prompt injection attack patterns.",
  hostedUrl: "",
  repoUrl: "https://github.com/Ari-S-123/antivenom",
  techStack: [typeScript, react, nextJS, tailwind, shadCn, postgres, apify, openai, ai, redpanda]
};

const eli5: Project = {
  name: "ELI5",
  description:
    "Visual research paper explainer for Gen Z and younger users affected by online brainrot and short attention spans. Top 8 Finalist project at the Daytona Hacksprint in October 2025.",
  hostedUrl: "",
  repoUrl: "https://github.com/Ari-S-123/eli5",
  techStack: [typeScript, react, nextJS, tailwind, shadCn, convex, workOs, anthropic, ai, daytona]
};

const investorFit: Project = {
  name: "InvestorFit",

  description: "Filtering out the noise faster than ever before.",
  hostedUrl: "",
  repoUrl: "https://github.com/Ari-S-123/investor-fit",
  techStack: [typeScript, react, nextJS, tailwind, shadCn, clerk, openai, ai]
};

const piiMasking: Project = {
  name: "Open Source PII Masking",
  description:
    "Improved PII masking performance in adversarial conditions and diverse contexts by fine-tuning DeBERTaV3 (transformer) with PyTorch and PEFT (DoRA) with a synthetically-augmented dataset of over 150,000 rows of data on an H100 GPU on Modal.",
  hostedUrl: "",
  repoUrl: "https://github.com/Ari-S-123/pii-masking",
  techStack: [python, pytorch, peft, modal]
};

const distributedKVStore: Project = {
  name: "Distributed KV Store",
  description:
    "A distributed key-value store database system that can switch between RAFT-backed Leader-Follower and Leaderless architectures. Useful for benchmarking the performance of these two architectures and understanding the trade-offs between them.",
  hostedUrl: "",
  repoUrl: "",
  techStack: [go, raft, terraform, aws]
};

const terraFix: Project = {
  name: "TerraFix",
  description:
    "AI agent that automates compliance for your AWS Cloud Infrastructure, by automatically opening pull requests to fix issues within your infrastructure-as-code configuration.",
  hostedUrl: "",
  repoUrl: "https://github.com/Ari-S-123/TerraFix",
  techStack: [python, aws, vanta, anthropic]
};

const anywhere: Project = {
  name: "Anywhere",
  description:
    "A voice-guided AI Tour Guide that lets you go anywhere on Earth with a Google Maps Street View panoramic picture and generate a selfie too with Nano Banana Pro. Won me third place on the Nano Banana Pro Track as well as being a top 6 finalist out of 62 projects at the Gemini 3 Hackathon by Google DeepMind and Cerebral Valley in December 2025.",
  hostedUrl: "",
  repoUrl: "https://github.com/Ari-S-123/anywhere",
  techStack: [typeScript, react, nextJS, tailwind, shadCn, gemini, googleMaps, gsap, zustand, wavefile, webAudioAPI]
};

export const webDevProjects: Project[] = [mixSmart, infiniteApps, storyWeaver, poemPortal];
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
export const hackathonProjects: Project[] = [anywhere, investorFit, eli5, antiVenom, mailSplit];
export const distributedSystemsProjects: Project[] = [terraFix, distributedKVStore];
export const mlProjects: Project[] = [piiMasking];
