import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';
import { CreateTodoDto, UpdateTodoDto } from './todo.dto';

@Injectable()
export class TodoService {
  private todoList: Todo[] = [];

  readAll(): Todo[] {
    return this.todoList;
  }

  createOne(data: CreateTodoDto): Todo {
    const lastIndex: number = this.todoList.length - 1;
    const id: number = lastIndex !== -1 ? this.todoList[lastIndex].id + 1 : 0;

    const todo: Todo = {
      id,
      ...data,
    };

    this.todoList = [...this.todoList, todo];

    return todo;
  }

  deleteAll(): void {
    this.todoList = [];
  }

  readOne(id: number): Todo {
    const todo: Todo = this.todoList.find((item: Todo) => item.id === id);

    if (!todo) {
      throw new NotFoundException(`id가 ${id}인 todo가 존재하지 않습니다.`);
    }

    return todo;
  }

  updateOne(id: number, data: UpdateTodoDto): Todo {
    this.readOne(id);
    const todo: Todo = {
      ...this.todoList[id],
      ...data,
    };

    this.todoList = this.todoList.map((item: Todo) =>
      item.id === id ? todo : item,
    );

    return todo;
  }

  deleteOne(id: number): void {
    this.readOne(id);
    this.todoList = this.todoList.filter((item: Todo) => item.id !== id);
  }
}
