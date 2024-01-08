// src/tasks/task.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop({ default: '' })
  description: string;
}

export type TaskDocument = Task & Document; // Define TaskDocument type

export const TaskSchema = SchemaFactory.createForClass(Task);
