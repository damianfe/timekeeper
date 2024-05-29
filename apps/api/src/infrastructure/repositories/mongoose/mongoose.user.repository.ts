import { User } from '../../../domain/entities/user.entities';
import UserModel from '../../models/user.models';
import { UserRepository } from '../../../application/interfaces/user.repository.interface';

export class MongooseUserRepository implements UserRepository {
  async createUser(user: User): Promise<User> {
    const newUser = await UserModel.create(user);
    return newUser.toObject();
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return UserModel.findOne({ email }).lean();
  }
}
