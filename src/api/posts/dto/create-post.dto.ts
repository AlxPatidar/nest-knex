import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({ message: 'Title is required' })
  @MinLength(5, { message: 'Title must have 6 chars' })
  @MaxLength(40, { message: 'Title is too long. only 40 chars allow.' })
  title: string;

  body: string;
}
