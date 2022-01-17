import { Module } from '@nestjs/common';
import { DataServicesModule } from '../data-services/data-services.module';
import { BookFactoryService } from './book-factory.service';
import { BookServices } from './book-services.service';

@Module({
  imports: [DataServicesModule],
  providers: [BookFactoryService, BookServices],
  exports: [BookFactoryService, BookServices],
})
export class BookServicesModule {}
