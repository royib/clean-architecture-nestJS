import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AuthorDocument = Author & Document;

@Schema()
export class Author {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
