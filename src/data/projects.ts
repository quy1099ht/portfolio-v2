import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Portfolio Website",
    href: "/projects",
    tags: ["React", "Redux", "Tailwind CSS", "MongoDB", "Node.js"],
    image: {
      LIGHT: "/images/projects/portfolioLight.webp",
      DARK: "/images/projects/portfolioDark.webp",
    },
  },
  {
    index: 1,
    title: "Pokedex",
    href: "/projects",
    tags: ["Angular", "Redux"],
    image: {
      LIGHT: "/images/projects/portfolioLight.webp",
      DARK: "/images/projects/portfolioDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Portfolio Website",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioLight.webp",
      "/images/projects/portfolioDark.webp",
    ],
    description:
      "A personal portfolio web app built with React, Redux, Tailwind CSS, MongoDB, and Node.js.",
    sourceCodeHref: "https://github.com/quy1099ht",
    liveWebsiteHref: "https://hopeful-jang-a1e5ce.netlify.app/",
  },
  {
    name: "Pokedex",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/portfolioLight.webp"],
    description:
      "An Angular and Redux Pokedex web app for browsing Pokemon. The API used by the app is no longer available.",
    sourceCodeHref: "https://github.com/quy1099ht/angular-pokedex",
  },
];
