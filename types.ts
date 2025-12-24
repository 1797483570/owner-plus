export interface SkillItem {
  name: string;
  level: number; // 1-100
  category: 'backend' | 'frontend' | 'devops' | 'cs';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  techStack: string[];
  achievements: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  duration: string;
  description: string;
  techStack: string[];
  metrics: string[]; // Key achievements/numbers
  details: string[]; // Detailed implementation points
}

export interface AwardItem {
  id: string;
  title: string;
  date: string;
  rank?: string;
}
