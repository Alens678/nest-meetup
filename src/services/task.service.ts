import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from '../schemas/task.schema';
import { UpdateTaskDto } from 'src/dtos/update-task.dto';

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

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    try {
      const task = await this.taskModel.findByIdAndUpdate(id, updateTaskDto, {
        new: true,
      });

      if (!task) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }

      return task;
    } catch (error) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }

  async deleteTask(id: string) {
    try {
      const task = await this.taskModel.findById(id).exec();
      await this.taskModel.deleteOne({ _id: id });
      return `The ${task.name} has been deleted`;
    } catch (error) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }
}
