import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateBookDto, UpdateBookDto, CreateBookResponseDto } from '../core/dtos';
import { BookUseCases, BookFactoryService } from '../use-cases/book';

@Controller('api/book')
export class BookController {
  constructor(
    private bookUseCases: BookUseCases,
    private bookFactoryService: BookFactoryService,
  ) {}

  @Get()
  async getAll() {
    return this.bookUseCases.getAllBooks();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.bookUseCases.getBookById(id);
  }

  @Post()
  async createBook(@Body() bookDto: CreateBookDto) : Promise<CreateBookResponseDto> {
    const createBookResponse = new CreateBookResponseDto();
    try {
      const book = this.bookFactoryService.createNewBook(bookDto);
      const createdBook = await this.bookUseCases.createBook(book);

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
    return this.bookUseCases.updateBook(bookId, book);
  }
}
