import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Portfolio Website",
    href: "/projects",
    tags: ["React", "Redux", "Tailwind CSS", "MongoDB", "Node.js"],
    image: {
      LIGHT: "/images/projects/portfolio-old.png",
    },
  },
  {
    index: 1,
    title: "Pokedex",
    href: "/projects",
    tags: ["Angular", "Redux"],
    image: {
      LIGHT: "/images/projects/pokedex-angular.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Portfolio Website",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolio-old.png",
      "/images/projects/projects-old.png",
    ],
    description:
      "A personal portfolio web app built with React, Redux, Tailwind CSS, MongoDB, and Node.js.",
    sourceCodeHref: "https://github.com/quy1099ht",
  },
  {
    name: "Pokedex",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/pokedex-angular.png"],
    description:
      "An Angular and Redux Pokedex web app for browsing Pokemon. The API used by the app is no longer available.",
    sourceCodeHref: "https://github.com/quy1099ht/angular-pokedex",
  },
  {
    name: "'Just A ...' Game - A Game Jam Entry",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/just-a-the-game.png"],
    description:
      "A game jam entry built in Unity, showcasing creativity and game development skills.",
    liveWebsiteHref: "https://jaketh3d0g.itch.io/just-a",
  },
];
