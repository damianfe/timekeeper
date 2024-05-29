import bcrypt from 'bcrypt';
import { User } from '../../domain/entities/user.entities';
import { UserRepository } from '../interfaces/user.repository.interface';
import { RoleModel } from '../../infrastructure/models/role.model';
import { Types } from 'mongoose';

export class RegisterUserUseCase {
  constructor(private readonly userRepository: UserRepository) { }

  async execute(user: User, roleName: string): Promise<User> {
    // Buscar el rol en la base de datos
    const role = await RoleModel.findOne({ name: roleName });
    if (!role) {
      throw new Error(`Rol ${roleName} no encontrado`);
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const userWithHashedPassword: User = {
      ...user,
      password: hashedPassword,
      role: role._id as Types.ObjectId
    };

    return this.userRepository.createUser(userWithHashedPassword);
  }
}
