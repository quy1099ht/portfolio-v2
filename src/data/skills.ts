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
  SiMysql,
  SiTrpc,
} from "react-icons/si";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages and web foundations
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";

// Frontend
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Databases and storage
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// DevOps and testing
import DockerSvg from "@/public/icons/docker.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages and Web Foundations",
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
    sectionName: "Frontend",
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
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindcssSvg,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      { name: "NestJS", icon: SiNestjs },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Java Play Framework", icon: SiOpenjdk },
      { name: "tRPC", icon: SiTrpc },
    ],
  },
  {
    sectionName: "Databases and Storage",
    skills: [
      { name: "Microsoft SQL Server", icon: SiMicrosoftsqlserver },
      { name: "PostgreSQL", icon: PostgressSvg },
      { name: "MongoDB", icon: MongoDBSvg },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase / Firestore", icon: SiFirebase },
    ],
  },
  {
    sectionName: "DevOps and Testing",
    skills: [
      {
        name: "Docker",
        icon: DockerSvg,
      },
      { name: "Karma / Jasmine / Marble", icon: SiJasmine },
      { name: "JUnit", icon: SiJunit5 },
      { name: "Storybook", icon: SiStorybook },
    ],
  },
];
