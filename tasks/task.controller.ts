// tasks/tasks.controller.ts

// Ensure the path is correct to import JwtAuthGuard
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { TasksService } from '../tasks/task.service';
import { Task } from '../tasks/task.model';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Adjust the path if needed

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() task: Task): Promise<Task> {
    return this.tasksService.create(task);
  }
}
