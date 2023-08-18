import { Body, Controller, Get, HttpCode, Post, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDTO } from './dtos/user.dto';
import { CreateTweetDTO } from './dtos/tweet.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  alive() {
    return "I'm okay!";
  }

  @Post('/sign-up')
  @HttpCode(200)
  createUser(@Body() body: CreateUserDTO) {
    return this.appService.createUser(body);
  }

  @Post('/tweets')
  createTweet(@Body() body: CreateTweetDTO) {
    return this.appService.createTweet(body, this.appService.getUsers());
  }

  @Get('/tweets')
  getTweets(@Query('page') page: number | undefined) {
    return this.appService.getAllTweets(page, this.appService.getTweets());
  }

  @Get('/tweets/:username')
  getTweetsByUsername(@Param('username') username: string) {
    return this.appService.getTweetsByUsername(
      username,
      this.appService.getTweets(),
    );
  }
}
