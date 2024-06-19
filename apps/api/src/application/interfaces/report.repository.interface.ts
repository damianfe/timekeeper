import { Project } from '../../domain/entities/project.entity';
import { Report } from '../../domain/entities/report.entity';

export interface ReportRepository {
    findById(id: string): Promise<Project | null>;
    saveReport(report: Report): Promise<Report>;
    findReportById(id: string): Promise<Report | null>;
    findReportsByProjectId(projectId: string): Promise<Report[]>;
}
