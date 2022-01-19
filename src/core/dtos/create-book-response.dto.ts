import { Book } from '../entities';

export class CreateBookResponseDto {
  success: boolean;

  createdBook: Book;
}
