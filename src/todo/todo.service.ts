import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  getAll(): string {
    return 'todo 를 모두 조회해야함';
  }

  postOne(): string {
    return 'todo 하나를 추가해야함';
  }

  deleteAll(): string {
    return 'todo 를 모두 지워야함';
  }

  getOne(id: string): string {
    return `${id} 번 todo 를 조회해야함`;
  }

  patchOne(id: string): string {
    return `${id} 번 todo 를 수정해야함`;
  }

  deleteOne(id: string): string {
    return `${id} 번 todo 를 삭제해야함`;
  }
}
