import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type GenreDocument = Genre & Document;

@Schema()
export class Genre {
  @Prop({ required: true, unique: true })
  name: string;
}

export const GenreSchema = SchemaFactory.createForClass(Genre);
