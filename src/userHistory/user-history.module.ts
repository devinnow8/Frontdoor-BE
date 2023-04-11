import { Module } from '@nestjs/common';
import { UsersHistoryService } from './user-history.service';
import { UsersHistoryController } from './user-history.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { History, HistorySchema } from './schemas/user-history.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: History.name, schema: HistorySchema }]),
  ],
  controllers: [UsersHistoryController],
  providers: [UsersHistoryService],
  exports: [UsersHistoryService],
})
export class UsersHistoryModule {}
