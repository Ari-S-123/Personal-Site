import type { Project } from "$lib/types";
import {
  tailwind,
  vite,
  supabase,
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
  convex,
  workOs,
  anthropic,
  daytona,
  python,
  pytorch,
  peft,
  gemini,
  googleMaps,
  gsap,
  zustand,
  wavefile,
  webAudioAPI,
  modal,
  viem,
  wagmi,
  rainbowKit,
  monad,
  dedalus,
  mapbox,
  openStreetMap,
  turfJs,
  mongoDB,
  VoyageAI,
  galileoAI,
  fireworksAI,
  coinbase,
  stripe,
  sim,
  betterAuth,
  playwright,
  browserBase,
  sentry
} from "./tools";

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

const mailSplit: Project = {
  name: "MailSplit",
  description:
    "A modern support email management dashboard with emails automatically assigned to the most appropriate team using RAG.",
  hostedUrl: "",
  repoUrl: "https://github.com/SUPATEAM-2025/mailsplit",
  techStack: [typeScript, react, nextJS, tailwind, shadCn, resend, supabase, postgres]
};

const eli5: Project = {
  name: "ELI5",
  description:
    "Visual research paper explainer for Gen Z and younger users affected by online brainrot and short attention spans. Top 8 Finalist project at the Daytona Hacksprint in October 2025.",
  hostedUrl: "",
  repoUrl: "https://github.com/Ari-S-123/eli5",
  techStack: [typeScript, react, nextJS, tailwind, shadCn, convex, workOs, anthropic, ai, daytona]
};

const piiMasking: Project = {
  name: "Open Source PII Masking",
  description:
    "Improved PII masking performance in adversarial conditions and diverse contexts by fine-tuning DeBERTaV3 (transformer) with PyTorch and PEFT (DoRA) with a synthetically-augmented dataset of over 150,000 rows of data on an H100 GPU on Modal.",
  hostedUrl: "",
  repoUrl: "https://github.com/Ari-S-123/pii-masking",
  techStack: [python, pytorch, peft, modal]
};

const anywhere: Project = {
  name: "Anywhere",
  description:
    "A voice-guided AI Tour Guide that lets you go anywhere on Earth with a Google Maps Street View panoramic picture and generate a selfie too with Nano Banana Pro. Won me 3rd place on the Nano Banana Pro Track as well as being a top 6 finalist out of 62 projects at the Gemini 3 Hackathon by Google DeepMind and Cerebral Valley in December 2025.",
  hostedUrl: "",
  repoUrl: "https://github.com/Ari-S-123/anywhere",
  techStack: [typeScript, react, nextJS, tailwind, shadCn, gemini, googleMaps, gsap, zustand, wavefile, webAudioAPI]
};

const supafans: Project = {
  name: "SupaFans",
  description:
    "SupaFans is an Agent-to-Agent (A2A) marketplace that democratizes the fan experience through programmatic loyalty by connecting artists directly with their most dedicated fans through on-chain reputation with ERC-8004 and agentic commerce on the Monad blockchain. Won/tied for 3rd place at the SNR >> 1 Hackathon by Bunny Labs in Napa Valley, California in December 2025.",
  hostedUrl: "",
  repoUrl: "https://github.com/drewM33/supafan",
  techStack: [typeScript, vite, react, viem, wagmi, rainbowKit, monad]
};

const icbg: Project = {
  name: "ICBG",
  description:
    "Intercontinental Ballistic Gifts is Santa's logistics operations platform for global gift delivery, combining an interactive 3D globe interface with AI-powered gift recommendations via Grok-4. Features polygon-based area selection on a Mapbox globe, real-time address identification from OpenStreetMap Overpass API, intelligent gift pairing using household metadata, and automated purchasing via MCP server integrations. Won 1st place on the Sleigh Track at the Santa's Ho's HackNight by Dedalus Labs in December 2025.",
  hostedUrl: "",
  repoUrl: "https://github.com/shlawgathon/ICBG",
  techStack: [typeScript, nextJS, react, convex, mapbox, openStreetMap, turfJs, tailwind, shadCn, dedalus]
};

const paigent: Project = {
  name: "Paigent Studio",
  description:
    "Paigent Studio is a workflow IDE that enables you to design and execute multi-agent workflows with automatic micropayments. Describe what you want to accomplish using voice or text, and our AI planner creates an optimal execution graph that pays for premium tools on-demand using USDC.",
  hostedUrl: "",
  repoUrl: "https://github.com/maxxie114/paigent",
  techStack: [
    typeScript,
    nextJS,
    react,
    convex,
    tailwind,
    shadCn,
    vercel,
    clerk,
    mongoDB,
    VoyageAI,
    galileoAI,
    fireworksAI,
    coinbase
  ]
};

const physical: Project = {
  name: "PhysicalAI",
  description:
    "The Agentic Physical Ad Space Marketplace: an analytic platform for real-world advertisements powered by real-time California PeMS traffic data and AI. Features AI-powered discovery via natural language search through SimAI, interactive 3D map exploration through Google Maps, smart demand scoring (green/yellow/red based on live traffic), and a seller marketplace where anyone can list their ad space. Buyers can preview how their billboard would look on any given ad space using generate preview powered by Nano Banana Pro, then easily book it with Stripe payments. Top 6 Finalist project at the YC Full Stack Hackathon in January 2026.",
  hostedUrl: "",
  repoUrl: "https://github.com/shlawgathon/Physical",
  techStack: [typeScript, react, nextJS, tailwind, stripe, supabase, sim, gemini, googleMaps, fireworksAI, vercel]
};

const spawnPoint: Project = {
  name: "SpawnPoint",
  description:
    "Single-click AI Agent onboarding with no friction. Automate account creation across multiple platforms for your AI agents. Built for the Better Hack Hackathon at YC in February 2026.",
  hostedUrl: "",
  repoUrl: "https://github.com/Ari-S-123/spawnpoint",
  techStack: [
    typeScript,
    react,
    nextJS,
    tailwind,
    shadCn,
    neon,
    betterAuth,
    ai,
    playwright,
    browserBase,
    sentry,
    vercel
  ]
};

export const projects: Project[] = [
  spawnPoint,
  physical,
  paigent,
  icbg,
  supafans,
  anywhere,
  piiMasking,
  eli5,
  mailSplit,
  infiniteApps,
  storyWeaver,
  aiDataStoryGenerator,
  f1DatavizFall2024
];
