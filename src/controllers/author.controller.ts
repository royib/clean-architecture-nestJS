import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateAuthorDto, UpdateAuthorDto } from '../core/dtos';
import { AuthorServices } from '../services/author/author-services.service';

@Controller('api/author')
export class AuthorController {
  constructor(private authorServices: AuthorServices) {}

  @Get()
  async getAll() {
    return this.authorServices.getAllAuthors();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.authorServices.getAuthorById(id);
  }

  @Post()
  createAuthor(@Body() authorDto: CreateAuthorDto) {
    return this.authorServices.createAuthor(authorDto);
  }

  @Put(':id')
  updateAuthor(
    @Param('id') authorId: string,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ) {
    return this.authorServices.updateAuthor(authorId, updateAuthorDto);
  }
}
