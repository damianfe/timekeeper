import { Request, Response } from 'express';
import { RegisterUserUseCase } from '../../application/use-cases/register-user';
import { LoginUserUseCase } from '../../application/use-cases/login-user';
import { MongooseUserRepository } from '../../infrastructure/repositories/mongoose/mongoose.user.repository';

const userRepository = new MongooseUserRepository();
const registerUserUseCase = new RegisterUserUseCase(userRepository);
const loginUserUseCase = new LoginUserUseCase(userRepository);

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password, birthDate, phone, role } = req.body;

    // Validar datos de entrada
    if (!firstName || !lastName || !email || !password || !birthDate || !phone || !role) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    const user = {
      id: '',
      firstName,
      lastName,
      email,
      password,
      birthDate: new Date(birthDate),
      phone,
      role:'' as any,
    };

    const newUser = await registerUserUseCase.execute(user,role);
    res.status(201).json({ message: 'Usuario registrado correctamente.', user: newUser });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Hubo un problema al registrar usuario.' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email y contraseña son obligatorios.' });
    }

    const token = await loginUserUseCase.execute(email, password);
    res.status(200).json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    console.error('Error durante el inicio de sesión:', error);
    res.status(401).json({ message: 'Email o contraseña inválidos' });
  }
};
