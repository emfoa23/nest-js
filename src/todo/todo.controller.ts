import { Controller, Get, Post } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get()
  getAll(): string {
    return 'todo hello';
  }

  @Post()
  postOne(): string {
    return 'post';
  }
}
