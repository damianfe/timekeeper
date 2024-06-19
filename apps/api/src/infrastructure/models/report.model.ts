import { Schema, model, Document } from 'mongoose';
import { Report } from '../../domain/entities/report.entity';

interface ReportDocument extends Document {
  projectId: string;
  generatedAt: Date;
  tasks: {
    name: string;
    startDate: Date;
    endDate: Date;
    timeSpent: number;
    status: string;
  }[];
  totalHours: number;
  totalEarnings: number;
}

const reportSchema = new Schema<ReportDocument>({
  projectId: { type: String, required: true },
  generatedAt: { type: Date, required: true },
  tasks: [{
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    timeSpent: { type: Number, required: true },
    status: { type: String, required: true },
  }],
  totalHours: { type: Number, required: true },
  totalEarnings: { type: Number, required: true },
});

const ReportModel = model<ReportDocument>('Report', reportSchema);

export default ReportModel;
