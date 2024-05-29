import { Request, Response } from 'express';
import { RegisterUserUseCase } from '../../application/use-cases/register-user';
import { MongooseUserRepository } from '../../infrastructure/repositories/mongoose/mongoose.user.repository';

const userRepository = new MongooseUserRepository();
const registerUserUseCase = new RegisterUserUseCase(userRepository);

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password, birthDate, phone, clientId } = req.body;

    // Validar datos de entrada
    if (!firstName || !lastName || !email || !password || !birthDate || !phone) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    const user = {
      id: '', // ID será generado por la base de datos
      firstName,
      lastName,
      email,
      password,
      birthDate: new Date(birthDate),
      phone,
      clientId,
    };

    const newUser = await registerUserUseCase.execute(user);
    res.status(201).json({ message: 'Usuario registrado correctamente.', user: newUser });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Hubo un problema al registrar usuario.' });
  }
};
