import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { CrmServicesModule } from '../../services/crm-services/crm-services.module';
import { BookFactoryService } from './book-factory.service';
import { BookUseCases } from './book.use-case';

@Module({
  imports: [DataServicesModule, CrmServicesModule],
  providers: [BookFactoryService, BookUseCases],
  exports: [BookFactoryService, BookUseCases],
})
export class BookUseCasesModule {}
