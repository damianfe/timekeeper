import { Schema, model, Document, Types } from 'mongoose';

interface TaskDocument extends Document {
  name: string;
  description: string;
  startDate: Date;
  endDate?: Date; 
  timeSpent: number; 
  status: 'active' | 'completed';
  projectId: Types.ObjectId; 
}

const taskSchema = new Schema<TaskDocument>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  timeSpent: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['active', 'completed'], 
    required: true 
  },
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true }
});

export default model<TaskDocument>('Task', taskSchema);
