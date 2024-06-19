import { ProjectRepository } from '../../../application/interfaces/project.repository.interface';
import { Project } from '../../../domain/entities/project.entity';
import ProjectModel from '../../models/project.model';
import { Types } from 'mongoose';

export class MongooseProjectRepository implements ProjectRepository {
  async findById(id: string): Promise<Project | null> {
    if (!Types.ObjectId.isValid(id)) return null;
    return ProjectModel.findById(id).lean();
  }

  async addProject(project: Project): Promise<Project> {
    const newProject = await ProjectModel.create(project);
    return newProject.toObject();
  }

  async updateProject(projectId: string, project: Partial<Project>): Promise<Project | null> {
    if (!Types.ObjectId.isValid(projectId)) return null;
    return ProjectModel.findByIdAndUpdate(projectId, project, { new: true }).lean();
  }

  async deleteProject(projectId: string): Promise<void> {
    if (!Types.ObjectId.isValid(projectId)) return;
    await ProjectModel.findByIdAndDelete(projectId);
  }

  async getProjectById(projectId: string): Promise<Project | null> {
    return this.findById(projectId);
  }

  async getAllProjects(): Promise<Project[]> {
    return ProjectModel.find().lean();
  }
}
