export class Report {
  id?: string;
  projectId: string;
  generatedAt: Date;
  tasks: {
    name: string;
    startDate: Date;
    endDate: Date | null; // Hacer endDate opcional
    timeSpent: number;
    status: string;
  }[];
  totalHours: number;
  totalEarnings: number;

  constructor(
    projectId: string,
    generatedAt: Date,
    tasks: {
      name: string;
      startDate: Date;
      endDate: Date | null; // Hacer endDate opcional
      timeSpent: number;
      status: string;
    }[],
    totalHours: number,
    totalEarnings: number,
    id?: string // Hacer opcional `id`
  ) {
    this.projectId = projectId;
    this.generatedAt = generatedAt;
    this.tasks = tasks;
    this.totalHours = totalHours;
    this.totalEarnings = totalEarnings;
    if (id) {
      this.id = id;
    }
  }
}
