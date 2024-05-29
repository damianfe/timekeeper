import { Types } from "mongoose";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: Date;
  phone: string;
  role: Types.ObjectId;
}