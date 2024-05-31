import { Schema, model, Document, Types } from 'mongoose';

interface ProjectDocument extends Document {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  hourlyRate: number;
  clientId?: Types.ObjectId; 
  status: 'active' | 'paused' | 'completed' | 'closed';
  tasks: Types.ObjectId[];
}

const projectSchema = new Schema<ProjectDocument>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  hourlyRate: { type: Number, required: true },
  clientId: { type: Schema.Types.ObjectId, ref: 'User', required: false }, // Opcional
  status: { 
    type: String, 
    enum: ['active', 'paused', 'completed', 'closed'], 
    required: true 
  },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
});

export default model<ProjectDocument>('Project', projectSchema);
