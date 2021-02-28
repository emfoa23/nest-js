import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly message: string;

  @IsString()
  readonly assignees: string[];
}

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
