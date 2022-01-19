import { Module } from '@nestjs/common';
import { ICrmServices } from '../../../core';

import { SalesforceService } from './salesforce-service.service';

@Module({
  providers: [
    {
      provide: ICrmServices,
      useClass: SalesforceService,
    },
  ],
  exports: [ICrmServices],
})
export class SalesforceServicesModule {}
