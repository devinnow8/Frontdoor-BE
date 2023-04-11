import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersHistoryService } from './user-history.service';
import { CreateUserHistoryDto } from './dto/create-user-history.dto';

@Controller('history')
export class UsersHistoryController {
  constructor(private readonly UsersHistoryService: UsersHistoryService) {}

  //creating entry of the response with userId and text msg
  @Post()
  create(@Body() CreateUserHistoryDto: CreateUserHistoryDto) {
    return this.UsersHistoryService.create(CreateUserHistoryDto);
  }

  //fetching the histories data on the basis of userId
  @Get('userId/:id')
  findByUserId(@Param('id') id: string) {
    return this.UsersHistoryService.findByUserId(id);
  }

  //fetching the histories data on the basis of id
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.UsersHistoryService.findById(id);
  }
}
