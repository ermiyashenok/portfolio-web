export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  inDepthDescription: string;
  learnings: { category: string; points: string[] }[];
  tags: string[];
  link?: string;
  github?: string;
  images?: string[];
  mobileOnlyPreview?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  link?: string;
}
