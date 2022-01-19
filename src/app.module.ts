import { Module } from '@nestjs/common';
import {
  AppController,
  BookController,
  AuthorController,
  GenreController,
} from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { BookServicesModule } from './services/use-cases/book/book-services.module';
import { AuthorServicesModule } from './services/use-cases/author/author-services.module';
import { GenreServicesModule } from './services/use-cases/genre/genre-services.module';
import { CrmServicesModule } from './services/crm-services/crm-services.module';

@Module({
  imports: [
    DataServicesModule,
    BookServicesModule,
    AuthorServicesModule,
    GenreServicesModule,
    CrmServicesModule,
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
