import { Book } from '../entities';

export class CreateBookResponse {
  success: boolean;

  createdBook: Book;
}
