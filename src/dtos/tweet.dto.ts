import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTweetDTO {
  @IsString()
  @IsNotEmpty()
  user: string;

  @IsString()
  @IsNotEmpty()
  tweet: string;
}
