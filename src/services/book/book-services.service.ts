import { Injectable } from '@nestjs/common';
import { Book } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateBookDto, UpdateBookDto } from '../../core/dtos';
import { BookFactoryService } from './book-factory.service';

@Injectable()
export class BookServices {
  constructor(
    private dataServices: IDataServices,
    private bookFactoryService: BookFactoryService,
  ) {}

  getAllBooks(): Promise<Book[]> {
    return this.dataServices.books.getAll();
  }

  getBookById(id: any): Promise<Book> {
    return this.dataServices.books.get(id);
  }

  createBook(bookDto: CreateBookDto): Promise<Book> {
    const book = this.bookFactoryService.createNewBook(bookDto);
    return this.dataServices.books.create(book);
  }

  updateBook(bookId: string, updateBookDto: UpdateBookDto): Promise<Book> {
    const book = this.bookFactoryService.updateBook(updateBookDto);
    return this.dataServices.books.update(bookId, book);
  }
}
