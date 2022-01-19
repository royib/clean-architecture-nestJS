import { Book } from '../entities';

export abstract class ICrmServices {
  abstract bookAdded(book: Book): Promise<boolean>;
}
