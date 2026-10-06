export interface ProjectItemProps {
  title: string;
  slug: string;
  description: string;
  image: string;
  link_demo?: string;
  link_github?: string;
  stacks: string[];
  category: string;
  content?: string;
  is_show: boolean;
  is_featured: boolean;
  updated_at: Date;
}

export interface ProjectsProps {
  projects: ProjectItemProps[];
}

export type ProjectCategory = 'automation' | 'full-stack' | 'ai-ml' | 'data';

export interface ProjectLink {
  label: 'GitHub' | 'Live' | 'Demo video';
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  context?: string;
  oneLiner: string;
  highlight?: { label: string; text: string };
  team?: string;
  myPart?: string;
  details?: string[];
  tags: string[];
  links: ProjectLink[];
  note?: string;
  image?: { src: string; alt: string; width: number; height: number };
  categories: ProjectCategory[];
}
