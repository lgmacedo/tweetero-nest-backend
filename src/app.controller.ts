import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDTO } from './dtos/user.dto';
import { CreateTweetDTO } from './dtos/tweet.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/sign-up')
  @HttpCode(200)
  createUser(@Body() body: CreateUserDTO) {
    return this.appService.createUser(body);
  }

  @Post('/tweets')
  createTweet(@Body() body: CreateTweetDTO) {
    return this.appService.createTweet(body, this.appService.getUsers());
  }
}
