import {
  SiExpress,
  SiNextdotjs,
  SiAngular,
  SiOpenjdk,
  SiSpringboot,
  SiNestjs,
  SiMicrosoftsqlserver,
  SiJunit5,
  SiStorybook,
  SiJasmine,
  SiFirebase,
} from "react-icons/si";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      { name: "Java", icon: SiOpenjdk },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      { name: "Angular", icon: SiAngular },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Java Play", icon: SiOpenjdk },
      { name: "NestJS", icon: SiNestjs },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      { name: "Microsoft SQL Server", icon: SiMicrosoftsqlserver },
      { name: "PostgreSQL", icon: PostgressSvg },
      { name: "MongoDB", icon: MongoDBSvg },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      { name: "Karma / Jasmine / Marble", icon: SiJasmine },
      { name: "JUnit", icon: SiJunit5 },
      { name: "Storybook", icon: SiStorybook },
      { name: "Docker", icon: DockerSvg },
    ],
  },
];
