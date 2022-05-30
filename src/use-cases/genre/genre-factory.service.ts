import { Injectable } from '@nestjs/common';
import { Genre } from '../../core/entities';
import { CreateGenreDto, UpdateGenreDto } from '../../core/dtos';

@Injectable()
export class GenreFactoryService {
  createNewGenre(createGenreDto: CreateGenreDto) {
    const newGenre = new Genre();
    newGenre.name = createGenreDto.name;

    return newGenre;
  }

  updateGenre(updateGenreDto: UpdateGenreDto) {
    const newGenre = new Genre();
    newGenre.name = updateGenreDto.name;

    return newGenre;
  }
}
