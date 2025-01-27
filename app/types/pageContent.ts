export interface Project {
  id: string;
  title: string;
  image: string;
  link: string;
}

export interface PageContent {
  title: string;
  description: string;
  items: string[];
  presentation: string;
  contribution: string;
  technologies: { name: string; image: string }[];
  frontend: string;
  backend: string;
  keyfunctions: string[];
  projects: Project[];
}