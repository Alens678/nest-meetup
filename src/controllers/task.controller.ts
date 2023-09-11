import {
  Controller,
  Get,
  Post,
  Body,
  //   Patch,
  Param,
  NotFoundException,
  Delete,
  Query,
  //   Delete,
} from '@nestjs/common';
import { TaskService } from '../services/task.service';
import { CreateTaskDto } from '../dtos/create-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  async getAll() {
    return this.taskService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    try {
      const task = await this.taskService.getOne(id);
      return task;
    } catch (error) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}
