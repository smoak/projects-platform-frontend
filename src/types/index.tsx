export interface User {
  name: string;
}

type ExperienceLevels =
  | "Learner (0+ years of experience)"
  | "Beginner (1+ years of experience)"
  | "Experienced (3+ years of experience)";

interface ProjectLead {
  name: string;
  experience: ExperienceLevels;
  company: string;
}

export interface Project {
  projectName: string;
  projectId: number;
  projectLead: ProjectLead;
  projectLookingFor: string;
  description: string;
  contributors: Array<string>;
  tags: Array<string>;
}

export interface AppContextState {
  user: User;
  projects: Array<Project>;
}
