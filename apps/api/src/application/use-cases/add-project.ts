import { ProjectRepository } from '../interfaces/project.repository.interface';
import { Project } from '../../domain/entities/project.entity';

export class AddProjectUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async execute(project: Project): Promise<Project> {
    return this.projectRepository.addProject(project);
  }
}
