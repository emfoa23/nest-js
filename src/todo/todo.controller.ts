import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAll(): string {
    return this.todoService.getAll();
  }

  @Post()
  postOne(): string {
    return this.todoService.postOne();
  }

  @Delete()
  deleteAll(): string {
    return this.todoService.deleteAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return this.todoService.getOne(id);
  }

  @Patch(':id')
  patchOne(@Param('id') id: string): string {
    return this.todoService.patchOne(id);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): string {
    return this.todoService.deleteOne(id);
  }
}
