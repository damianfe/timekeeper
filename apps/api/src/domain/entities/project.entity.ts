import { Schema } from 'mongoose';

export class Project {
  id?: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  hourlyRate: number;
  clientId?: Schema.Types.ObjectId;
  status: string;
  tasks: string[];

  constructor(
    name: string,
    description: string,
    startDate: Date,
    endDate: Date,
    hourlyRate: number,
    status: string,
    clientId?: Schema.Types.ObjectId,
    tasks: string[] = [],
    id?: string
  ) {
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.hourlyRate = hourlyRate;
    this.clientId = clientId;
    this.status = status;
    this.tasks = tasks;
    this.id = id ?? '';
  }
}
