import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly message: string;

  @IsString({ each: true })
  @IsOptional()
  readonly assignees?: string[];
}

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
