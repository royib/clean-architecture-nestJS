import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateBookDto, UpdateBookDto, CreateBookResponseDto } from '../core/dtos';
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
  async createBook(@Body() bookDto: CreateBookDto) {
    const createBookResponse = new CreateBookResponseDto();
    try {
      const book = this.bookFactoryService.createNewBook(bookDto);
      const createdBook = await this.bookServices.createBook(book);

      createBookResponse.success = true;
      createBookResponse.createdBook = createdBook;
    } catch (error) {
      // report and log error
      createBookResponse.success = false;
    }

    return createBookResponse;
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
