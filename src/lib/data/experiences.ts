import type { Experience } from "$lib/types";
import {
  react,
  typeScript,
  reactTestingLibrary,
  mui,
  jest,
  javaScript,
  reactNative,
  sql,
  apacheDerby,
  mySQL,
  postgres,
  nextJS,
  vercel,
  supabase,
  tailwind,
  java,
  chakraUI,
  recharts,
  playwright,
  sentry,
  bugsink,
  argosCI,
  awsChime,
  prisma,
  express
} from "./tools";

const ner: Experience = {
  title: "Software Group Lead/Developer",
  organization: "Northeastern Electric Racing",
  description: [
    "Developed FinishLine, a project management web app to heighten the efficiency of Northeastern University’s title-winning electric racing team in the SAE Formula Hybrid+Electric Series.",
    "Managed developer workflow through the Agile framework and mentored over a dozen developers by assisting them with blockers and overseeing their progress and growth.",
    "Implemented a Gantt Chart Visualization with built-in filters to efficiently display 80+ unique projects with hundreds of individual work packages to boost the productivity of 200+ engineers.",
    "Engineered dozens of bespoke front-end components to improve the user experience for 200+ users."
  ],
  startDate: "September 2021",
  endDate: "April 2023",
  techStack: [typeScript, react, mui, jest, reactTestingLibrary, prisma, express]
};

const lexiaLearning: Experience = {
  title: "Software Engineering Intern",
  organization: "Lexia Learning",
  description: [
    "Engineered and refactored front-end components to improve the user experience for millions of students and tens of thousands of teachers on Lexia Learning's Core5 Web and iPad English literacy learning program.",
    "Enhanced A11y compliance by implementing alt text for images to enhance the user experience for thousands of visually impaired children who require screen readers.",
    "Advanced the development of new Skill Check features for more effective appraisal of learners’ progress.",
    "Collaborated on engineering tasks through routine Scrum stand-up and retro meetings."
  ],
  startDate: "July 2022",
  endDate: "December 2022",
  techStack: [typeScript, javaScript, react, reactNative, jest, reactTestingLibrary]
};

const ta1: Experience = {
  title: "Teaching Assistant - Databases",
  organization: "Khoury College of Computer Sciences",
  description: [
    "Guided over 40 students in designing and implementing database schemas, optimizing queries, and debugging complex SQL scripts.",
    "Held regular office hours to address questions, clarify course concepts, and mentor students on best practices in database design.",
    "Provided feedback on assignments by grading submissions, identifying common misconceptions, and offering suggestions for improvement."
  ],
  startDate: "January 2025",
  endDate: "April 2025",
  techStack: [sql, apacheDerby, mySQL, postgres]
};

const pawToGrader: Experience = {
  title: "Founding Engineer Intern + Course Assistant",
  organization: "Khoury College of Computer Sciences",
  description: [
    "Engineered Pawtograder: an open-source CI-based Autograder, Q&A, Office Hours, and CourseOps platform for Computer Science instructors and students (https://pawtograder.com).",
    "Spearheaded the development of the Office Hours feature with live collaboration through text/video chat, notifications and other cool and useful features.",
    "Implemented analytics and data visualizations using Postgres Views to reveal actionable insights to instructors on how their students use flashcards for learning.",
    "Improved end-to-end test coverage substantially.",
    "Drafted lecture notes and labs for CS 3100 Program Design and Implementation 2."
  ],
  startDate: "May 2025",
  endDate: "August 2025",
  techStack: [
    typeScript,
    react,
    nextJS,
    tailwind,
    chakraUI,
    recharts,
    postgres,
    supabase,
    playwright,
    argosCI,
    sentry,
    bugsink,
    awsChime,
    vercel,
    java
  ]
};

const ta2: Experience = {
  title: "Teaching Assistant - Software Engineering",
  organization: "Khoury College of Computer Sciences",
  description: [
    "Guiding graduate students with a focus on modern software development life cycle models (Agile), requirements analysis, testing strategies, software architecture, and design patterns."
  ],
  startDate: "September 2025",
  endDate: "December 2025",
  techStack: [typeScript, javaScript, react, nextJS]
};

export const experiences: Experience[] = [ta2, pawToGrader, ta1, lexiaLearning, ner];
