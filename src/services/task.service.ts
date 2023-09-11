import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from '../schemas/task.schema';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async create(createTaskDto: CreateTaskDto) {
    return this.taskModel.create(createTaskDto);
  }

  async getAll(): Promise<Task[]> {
    return this.taskModel.find().exec(); // Use findAll() or find() to retrieve all records
  }

  async getOne(id: string) {
    try {
      const task = await this.taskModel.findById(id).exec();

      if (!task) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }

      return task;
    } catch (error) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }
}
