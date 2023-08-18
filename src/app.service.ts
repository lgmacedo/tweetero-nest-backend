import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Tweet } from './entities/tweet.entity';
import { CreateUserDTO } from './dtos/user.dto';
import { CreateTweetDTO } from './dtos/tweet.dto';

import { UnauthorizedError } from './errors/UnauthorizedError';
import fixTweets from './utils/fixedTweets';
import { BadRequestError } from './errors/BadRequestError';

@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweet[];

  constructor() {
    this.users = [];
    this.tweets = [];
  }

  getUsers() {
    return this.users;
  }

  getTweets() {
    return this.tweets;
  }

  createUser(body: CreateUserDTO) {
    const newUser = new User(body.username, body.avatar);
    this.users.push(newUser);
  }

  createTweet(body: CreateTweetDTO, users: User[]) {
    const userSignedUp = users.find(
      (user) => user.getUsername() === body.username,
    );
    if (!userSignedUp) throw new UnauthorizedError();
    const newTweet = new Tweet(userSignedUp, body.tweet);
    this.tweets.push(newTweet);
  }

  getAllTweets(page: number, tweets: Tweet[]) {
    const itemsPerPage = 15;
    if (!page) {
      const last15 = tweets.slice(-itemsPerPage);
      return fixTweets(last15);
    } else {
      if (page < 1) throw new BadRequestError();
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return fixTweets(tweets.slice(startIndex, endIndex));
    }
  }

  getTweetsByUsername(username: string, tweets: Tweet[]) {
    const userTweets = tweets.filter(
      (tweet) => tweet.getUsername() === username,
    );
    return fixTweets(userTweets);
  }
}
