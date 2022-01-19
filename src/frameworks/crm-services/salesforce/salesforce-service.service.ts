import { Injectable } from '@nestjs/common';
import { Book } from '../../../core/entities';
import { ICrmServices } from '../../../core/abstracts';

@Injectable()
export class SalesforceService implements ICrmServices {
  bookAdded(book: Book): Promise<boolean> {
    // Implement salesforce api logic

    return Promise.resolve(true);
  }
}
