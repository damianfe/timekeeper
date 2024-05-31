import { Task } from '../../domain/entities/task.entity';

export interface TaskRepository {
  createTask(task: Task): Promise<Task>;
  findTasksByProjectId(projectId: string): Promise<Task[]>;
  updateTask(taskId: string, task: Partial<Task>): Promise<Task | null>;
  deleteTask(taskId: string): Promise<boolean>;
}
