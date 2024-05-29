import { User } from '../../domain/entities/user.entities';

export interface UserRepository {
  createUser(user: User): Promise<User>;
  findUserByEmail(email: string): Promise<User | null>;
  // Otros métodos necesarios para la gestión de usuarios
}
