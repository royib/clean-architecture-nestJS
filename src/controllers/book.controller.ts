import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateBookDto, UpdateBookDto } from '../core/dtos';
import { BookServices, BookFactoryService } from '../services/use-cases/book';

@Controller('api/book')
export class BookController {
  constructor(
    private bookServices: BookServices,
    private bookFactoryService: BookFactoryService,
  ) {}

  @Get()
  async getAll() {
    return this.bookServices.getAllBooks();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.bookServices.getBookById(id);
  }

  @Post()
  createBook(@Body() bookDto: CreateBookDto) {
    const book = this.bookFactoryService.createNewBook(bookDto);
    return this.bookServices.createBook(book);
  }

  @Put(':id')
  updateBook(
    @Param('id') bookId: string,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    const book = this.bookFactoryService.updateBook(updateBookDto);
    return this.bookServices.updateBook(bookId, book);
  }
}
