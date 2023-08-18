import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateUserDTO {
  @IsString({ message: 'All fields are required!' })
  @IsNotEmpty({ message: 'All fields are required!' })
  username: string;

  @IsString({ message: 'All fields are required!' })
  @IsNotEmpty({ message: 'All fields are required!' })
  @IsUrl({}, { message: 'All fields are required!' })
  avatar: string;
}
