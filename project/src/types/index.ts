export interface Skill {
  name: string;
  percentage: number;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Achievement {
  metric: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  url: string;
}

export interface ChatMessage {
  question: string;
  answer: string;
}