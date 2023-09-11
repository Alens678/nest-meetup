// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = HydratedDocument<Task>;

export enum StatusEnum {
  TODO = 'todo',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}

@Schema()
export class Task {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, enum: StatusEnum }) // Use the enum you defined
  status: StatusEnum;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
