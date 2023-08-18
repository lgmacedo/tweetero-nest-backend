import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Tweet } from './entities/tweet.entity';
import { CreateUserDTO } from './dtos/user.dto';
import { CreateTweetDTO } from './dtos/tweet.dto';

import { UnauthorizedError } from './errors/UnauthorizedError';

@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweet[];

  constructor(){
    this.users = [];
    this.tweets = [];
  }

  getUsers(){
    return this.users;
  }

  createUser(body: CreateUserDTO) {
    const newUser = new User(body.username, body.avatar);
    this.users.push(newUser);
  }

  createTweet(body: CreateTweetDTO, users: User[]) {
    const userSignedUp = users.find(user => user.getUsername() === body.user);
    if(!userSignedUp) throw new UnauthorizedError();
    const newTweet = new Tweet(userSignedUp, body.tweet);
    this.tweets.push(newTweet);
  }
}
