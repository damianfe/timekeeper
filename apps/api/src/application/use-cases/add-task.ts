import { Task } from '../../domain/entities/task.entity';
import { TaskRepository } from '../interfaces/task.repository.interface';

export class AddTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(task: Task): Promise<Task> {
    return this.taskRepository.createTask(task);
  }
}
