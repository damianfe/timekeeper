import { Request, Response } from 'express';
import { AddTaskUseCase } from '../../application/use-cases/add-task';
import { MongooseTaskRepository } from '../../infrastructure/repositories/mongoose/mongoose.task.repository';
import { Schema } from 'mongoose';
import { Task } from '../../domain/entities/task.entity';

const taskRepository = new MongooseTaskRepository();
const addTaskUseCase = new AddTaskUseCase(taskRepository);

export const addTask = async (req: Request, res: Response) => {
  try {
    const { name, description, startDate, endDate, timeSpent, status, projectId } = req.body;

    // Validar datos de entrada
    if (!name || !description || !startDate || !timeSpent || !status || !projectId) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios, excepto endDate.' });
    }

    const task: Task = {
      name,
      description,
      startDate: new Date(startDate),
      endDate: endDate ? new Date(endDate) : null, // Cambiar a null en lugar de undefined
      timeSpent,
      status,
      projectId: new Schema.Types.ObjectId(projectId)
    };

    const newTask = await addTaskUseCase.execute(task);
    res.status(201).json({ message: 'Tarea agregada correctamente.', task: newTask });
  } catch (error) {
    console.error('Error al agregar tarea:', error);
    res.status(500).json({ message: 'Hubo un problema al agregar la tarea.' });
  }
};
