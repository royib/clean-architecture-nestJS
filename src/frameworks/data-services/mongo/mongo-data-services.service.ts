import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import {
  Author,
  AuthorDocument,
  Book,
  BookDocument,
  Genre,
  GenreDocument,
} from './model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  authors: MongoGenericRepository<Author>;
  books: MongoGenericRepository<Book>;
  genres: MongoGenericRepository<Genre>;

  constructor(
    @InjectModel(Author.name)
    private AuthorRepository: Model<AuthorDocument>,
    @InjectModel(Book.name)
    private BookRepository: Model<BookDocument>,
    @InjectModel(Genre.name)
    private GenreRepository: Model<GenreDocument>,
  ) {}

  onApplicationBootstrap() {
    this.authors = new MongoGenericRepository<Author>(this.AuthorRepository);
    this.books = new MongoGenericRepository<Book>(this.BookRepository, [
      'author',
      'genre',
    ]);
    this.genres = new MongoGenericRepository<Genre>(this.GenreRepository);
  }
}
