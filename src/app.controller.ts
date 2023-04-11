import { UsersHistoryService } from './userHistory/user-history.service';
import { UsersService } from 'src/users/users.service';
import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private usersService: UsersService,
    private usersHistoryService: UsersHistoryService,
  ) {}

  @Post('/call-openai-api')
  @HttpCode(200)
  async callOpenApi(@Body() data: { text: string; id: string }) {
    try {
      // Call the OpenAI API here
      const result = await this.appService.callOpenApi(data);
      if (data.id) {
        const user = await this.usersService.findById(data.id);

        if (user) {
          await this.usersHistoryService.create({
            userId: user._id,
            text: data.text,
            reply: result,
          });
        }
        console.log(user, 'useruseruser==>>>123');
      }

      return { text: result, statusCode: 200 };
    } catch (error) {
      console.log('error callOpenApi==>>123', error);
    }
  }
}
