import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateGenreDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateGenreDto extends PartialType(CreateGenreDto) {}
