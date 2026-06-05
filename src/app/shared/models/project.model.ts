export interface Project {
  id: number;
  name: string;
  description: string;
  htmlUrl: string;
  homepage?: string;
  language?: string;
  stars: number;
  forks: number;
  updatedAt: Date;
  topics: string[];
}
