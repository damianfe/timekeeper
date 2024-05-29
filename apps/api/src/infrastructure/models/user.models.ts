import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthDate: { type: Date, required: true },
  phone: { type: String, required: true },
  clientId: { type: Schema.Types.ObjectId, ref: 'Client' },
});

const UserModel = model('User', userSchema);
export default UserModel;
