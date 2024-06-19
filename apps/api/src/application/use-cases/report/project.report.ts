import { ReportRepository } from '../../interfaces/report.repository.interface';
import { ProjectRepository } from '../../interfaces/project.repository.interface';
import { TaskRepository } from '../../interfaces/task.repository.interface';
import { ReportService } from '../../../domain/services/report.service';

export class GenerateProjectReportUseCase {
  constructor(
    private reportRepository: ReportRepository,
    private projectRepository: ProjectRepository,
    private taskRepository: TaskRepository,
    private reportService: ReportService
  ) {}

  async execute(projectId: string) {
    const project = await this.projectRepository.findById(projectId);
    const tasks = await this.taskRepository.findTasksByProjectId(projectId);

    if (!project || !tasks) {
      throw new Error('Project or tasks not found');
    }

    const report = this.reportService.generateProjectReport(project, tasks);
    return this.reportRepository.saveReport(report);
  }
}
