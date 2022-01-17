import { Module } from '@nestjs/common';
import {
  AppController,
  BookController,
  AuthorController,
  GenreController,
} from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { BookServicesModule } from './services/book/book-services.module';
import { AuthorServicesModule } from './services/author/author-services.module';
import { GenreServicesModule } from './services/genre/genre-services.module';

@Module({
  imports: [
    DataServicesModule,
    BookServicesModule,
    AuthorServicesModule,
    GenreServicesModule,
  ],
  controllers: [
    AppController,
    BookController,
    AuthorController,
    GenreController,
  ],
  providers: [],
})
export class AppModule {}
