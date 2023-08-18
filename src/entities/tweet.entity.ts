import { User } from './user.entity';

export class Tweet {
  private user: User;
  private tweet: string; // text

  constructor(user: User, tweet: string) {
    this.user = user;
    this.tweet = tweet;
  }

  getUsername() {
    return this.user.getUsername();
  }

  getAvatar() {
    return this.user.getAvatar();
  }

  getTweet() {
    return this.tweet;
  }
}
