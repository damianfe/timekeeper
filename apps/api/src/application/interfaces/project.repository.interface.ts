import { Project } from '../../domain/entities/project.entity';

export interface ProjectRepository {

  addProject(project: Project): Promise<Project>;
  updateProject(projectId: string, project: Partial<Project>): Promise<Project | null>;
  deleteProject(projectId: string): Promise<void>;
  getProjectById(projectId: string): Promise<Project | null>;
  getAllProjects(): Promise<Project[]>;
}
