import { Request, Response } from 'express';
import User from '../models/user.models';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password, birthDate, phone, clientId } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo electrónico ya está en uso.' });
    }

    const user = new User({
      firstName,
      lastName,
      email,
      password,
      birthDate,
      phone,
      client: clientId
    });

    await user.save();

    res.status(201).json({ message: 'Usuario registrado correctamente.' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Hubo un problema al registrar usuario.' });
  }
};
