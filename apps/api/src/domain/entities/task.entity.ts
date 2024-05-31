import { Types } from 'mongoose';

export interface Task {
  id?: Types.ObjectId;
  name: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  timeSpent: number;
  status: 'active' | 'completed';
  projectId: Types.ObjectId;
}
