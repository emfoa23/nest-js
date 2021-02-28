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
import { CreateTodoDto, UpdateTodoDto } from './todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAll(): Todo[] {
    return this.todoService.readAll();
  }

  @Post()
  postOne(@Body() data: CreateTodoDto): Todo {
    return this.todoService.createOne(data);
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
  patchOne(@Param('id') id: string, @Body() data: UpdateTodoDto): Todo {
    return this.todoService.updateOne(id, data);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): void {
    this.todoService.deleteOne(id);
  }
}
