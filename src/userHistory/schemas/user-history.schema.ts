import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserHistoryDocument = History & Document;

@Schema()
export class History {
  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  reply: string;

  @Prop({ required: true })
  userId: string;
}

export const HistorySchema = SchemaFactory.createForClass(History);
