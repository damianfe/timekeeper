import bcrypt from 'bcrypt';
import { User } from '../../domain/entities/user.entities';
import { UserRepository } from '../interfaces/user.repository.interface';

export class RegisterUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(user: User): Promise<User> {
    // Encriptar la contraseña antes de guardar el usuario
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const userWithHashedPassword = { ...user, password: hashedPassword };

    return this.userRepository.createUser(userWithHashedPassword);
  }
}
