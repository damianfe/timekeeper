import { Types } from 'mongoose';

export interface Project {
  id?: Types.ObjectId; 
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  hourlyRate: number;
  clientId?: Types.ObjectId; 
  status: 'active' | 'paused' | 'completed' | 'closed';
  tasks: Types.ObjectId[];
}
