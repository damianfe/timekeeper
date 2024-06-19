import { Schema } from 'mongoose';

export class Task {
  id?: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date | null;
  timeSpent: number;
  status: string;
  projectId: Schema.Types.ObjectId;

  constructor(
    name: string,
    description: string,
    startDate: Date,
    endDate: Date | null,
    timeSpent: number,
    status: string,
    projectId: Schema.Types.ObjectId,
    id?: string
  ) {
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.timeSpent = timeSpent;
    this.status = status;
    this.projectId = projectId;
    this.id = id ?? '';
  }
}
