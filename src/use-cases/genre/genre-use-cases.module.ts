import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { GenreFactoryService } from './genre-factory.service';
import { GenreUseCases } from './genre.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [GenreFactoryService, GenreUseCases],
  exports: [GenreFactoryService, GenreUseCases],
})
export class GenreUseCasesModule {}
