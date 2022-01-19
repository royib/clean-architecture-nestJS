import { Injectable } from '@nestjs/common';
import { Book } from '../../../core/entities';
import { IDataServices, ICrmServices } from '../../../core/abstracts';
import { CreateBookDto, UpdateBookDto } from '../../../core/dtos';
import { BookFactoryService } from './book-factory.service';

@Injectable()
export class BookServices {
  constructor(
    private dataServices: IDataServices,
    private bookFactoryService: BookFactoryService,
    private crmServices: ICrmServices,
  ) {}

  getAllBooks(): Promise<Book[]> {
    return this.dataServices.books.getAll();
  }

  getBookById(id: any): Promise<Book> {
    return this.dataServices.books.get(id);
  }

  async createBook(bookDto: CreateBookDto): Promise<Book> {
    try {
      const book = this.bookFactoryService.createNewBook(bookDto);

      // call to our dependencies
      const createdBook = await this.dataServices.books.create(book);
      await this.crmServices.bookAdded(createdBook);

      return createdBook;
    } catch (error) {
      throw error;
    }
  }

  updateBook(bookId: string, updateBookDto: UpdateBookDto): Promise<Book> {
    const book = this.bookFactoryService.updateBook(updateBookDto);
    return this.dataServices.books.update(bookId, book);
  }
}
