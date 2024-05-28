import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

interface User extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: Date;
  phone: string;
  client?: string; // Referencia al cliente asociado
}

const userSchema = new Schema<User>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthDate: { type: Date, required: true },
  phone: { type: String, required: true },
  client: { type: Schema.Types.ObjectId, ref: 'Client' } // Referencia al cliente asociado
});

userSchema.pre<User>('save', async function(next) {
  if (!this.isModified('password')) return next();
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

const User = model<User>('User', userSchema);

export default User;
