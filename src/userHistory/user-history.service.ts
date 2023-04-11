import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserHistoryDto } from './dto/create-user-history.dto';
import { History, UserHistoryDocument } from './schemas/user-history.schema';

@Injectable()
export class UsersHistoryService {
  constructor(
    @InjectModel(History.name)
    private historyModel: Model<UserHistoryDocument>,
  ) {}

  async create(
    createUserDto: CreateUserHistoryDto,
  ): Promise<UserHistoryDocument> {
    const createdUser = new this.historyModel(createUserDto);
    return createdUser.save();
  }

  async findByUserId(userId: string): Promise<UserHistoryDocument[]> {
    return this.historyModel.find({ userId }).exec();
  }

  async findById(id: string): Promise<UserHistoryDocument> {
    return this.historyModel.findById(id);
  }
}
