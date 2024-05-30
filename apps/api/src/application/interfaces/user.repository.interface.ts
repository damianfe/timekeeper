import { User } from '../../domain/entities/user.entities';

export interface UserRepository {
  createUser(user: User): Promise<User>;
  findUserByEmail(email: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
}
