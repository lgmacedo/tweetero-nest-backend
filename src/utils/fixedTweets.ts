import { Tweet } from '../entities/tweet.entity';

export default function fixTweets(tweets: Tweet[]) {
  return tweets.map((tweet) => ({
    username: tweet.getUsername(),
    avatar: tweet.getAvatar(),
    tweet: tweet.getTweet(),
  }));
}
