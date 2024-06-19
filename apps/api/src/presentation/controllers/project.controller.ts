import { Request, Response } from 'express';
import { AddProjectUseCase } from '../../application/use-cases/add-project';
import { MongooseProjectRepository } from '../../infrastructure/repositories/mongoose/mongoose.project.repository';
import { Schema } from 'mongoose';
import { Project } from '../../domain/entities/project.entity';

const projectRepository = new MongooseProjectRepository();
const addProjectUseCase = new AddProjectUseCase(projectRepository);

export const addProject = async (req: Request, res: Response) => {
  try {
    const { name, description, startDate, endDate, hourlyRate, clientId, status } = req.body;

    // Validar datos de entrada
    if (!name || !description || !startDate || !endDate || !hourlyRate || !status) {
      return res.status(400).json({ message: 'Todos los campos obligatorios, excepto clientId, deben estar completos.' });
    }

    const project = new Project(
      name,
      description,
      new Date(startDate),
      new Date(endDate),
      hourlyRate,
      status,
      clientId ? new Schema.Types.ObjectId(clientId) : undefined, // Opcional
      []
    );

    const newProject = await addProjectUseCase.execute(project);
    res.status(201).json({ message: 'Proyecto agregado correctamente.', project: newProject });
  } catch (error) {
    console.error('Error al agregar proyecto:', error);
    res.status(500).json({ message: 'Hubo un problema al agregar el proyecto.' });
  }
};
