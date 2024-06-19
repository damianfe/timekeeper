import { Project } from '../entities/project.entity';
import { Task } from '../entities/task.entity';
import { Report } from '../entities/report.entity';

export class ReportService {
  generateProjectReport(project: Project, tasks: Task[]): Report {
    const totalHours = tasks.reduce((sum, task) => sum + task.timeSpent, 0);
    const totalEarnings = totalHours * project.hourlyRate;

    if (!project.id) {
      throw new Error('Project ID is undefined');
    }

    // Convertir endDate undefined a null
    const tasksForReport = tasks.map(task => ({
      name: task.name,
      startDate: task.startDate,
      endDate: task.endDate ?? null,
      timeSpent: task.timeSpent,
      status: task.status
    }));

    const report = new Report(
      project.id.toString(), // Convertir a string
      new Date(),
      tasksForReport,
      totalHours,
      totalEarnings
    );

    return report;
  }
}
