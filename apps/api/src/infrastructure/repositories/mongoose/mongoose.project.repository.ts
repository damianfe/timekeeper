import { Project } from '../../../domain/entities/project.entity';
import { ProjectRepository } from '../../../application/interfaces/project.repository.interface';
import ProjectModel from '../../models/project.model';

export class MongooseProjectRepository implements ProjectRepository {
  async addProject(project: Project): Promise<Project> {
    const newProject = await ProjectModel.create(project);
    return newProject.toObject();
  }

  async updateProject(projectId: string, project: Partial<Project>): Promise<Project | null> {
    return ProjectModel.findByIdAndUpdate(projectId, project, { new: true }).lean();
  }

  async deleteProject(projectId: string): Promise<void> {
    await ProjectModel.findByIdAndDelete(projectId);
  }

  async getProjectById(projectId: string): Promise<Project | null> {
    return ProjectModel.findById(projectId).lean();
  }

  async getAllProjects(): Promise<Project[]> {
    return ProjectModel.find().lean();
  }
}
