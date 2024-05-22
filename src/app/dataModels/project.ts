import ProjectStatusEnum from '@/enum/project-status-enum';
import { Link } from './link';
export interface Project {
  title: string;
  description: string;
  links: Link[];
  projectLead?: string;
  languages?: string[];
  tools?: string[];
  technologies?: string[];
  programAreas?: string[];
  location?: string;
  status?: ProjectStatusEnum;
  contributors?: string[];
  projectKey: string;
}
