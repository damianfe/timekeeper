import { Task } from '../../../domain/entities/task.entity';
import TaskModel from '../../models/task.model';
import { TaskRepository } from '../../../application/interfaces/task.repository.interface';

export class MongooseTaskRepository implements TaskRepository {
  async createTask(task: Task): Promise<Task> {
    const newTask = await TaskModel.create(task);
    return newTask.toObject();
  }

  async findTasksByProjectId(projectId: string): Promise<Task[]> {
    return TaskModel.find({ projectId }).lean();
  }

  async updateTask(taskId: string, task: Partial<Task>): Promise<Task | null> {
    return TaskModel.findByIdAndUpdate(taskId, task, { new: true }).lean();
  }

  async deleteTask(taskId: string): Promise<boolean> {
    const result = await TaskModel.findByIdAndDelete(taskId);
    return result !== null;
  }
}
