import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateBookDto, UpdateBookDto } from '../core/dtos';
import { BookServices } from '../services/use-cases/book/book-services.service';

@Controller('api/book')
export class BookController {
  constructor(private bookServices: BookServices) {}

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
    return this.bookServices.createBook(bookDto);
  }

  @Put(':id')
  updateBook(
    @Param('id') bookId: string,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this.bookServices.updateBook(bookId, updateBookDto);
  }
}
