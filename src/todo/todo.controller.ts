import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAll(): Todo[] {
    return this.todoService.readAll();
  }

  @Post()
  postOne(@Body() todoData): Todo {
    return this.todoService.createOne(todoData);
  }

  @Delete()
  deleteAll(): void {
    this.todoService.deleteAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Todo {
    return this.todoService.readOne(id);
  }

  @Patch(':id')
  patchOne(@Param('id') id: string, @Body() todoData): Todo {
    return this.todoService.updateOne(id, todoData);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): void {
    this.todoService.deleteOne(id);
  }
}
