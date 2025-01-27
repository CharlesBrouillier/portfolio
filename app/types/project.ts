export interface Project {
  id: string;
  title: string;
  date?: string;
  description?: string;
  image: string;
  link: string;
  animationDelay?: string;
  technologies?: { name: string; image: string }[];
};