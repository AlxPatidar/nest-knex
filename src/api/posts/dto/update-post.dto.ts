import { IsNotEmpty, MinLength, MaxLength, IsInt } from 'class-validator';

export class UpdatePostDto {
  @IsNotEmpty({ message: 'PostId is required' })
  @IsInt({ message: 'Post id must be integer' })
  postId: number;

  @IsNotEmpty({ message: 'Title is required' })
  @MinLength(5, { message: 'Title must have 6 chars' })
  @MaxLength(40, { message: 'Title is too long. only 40 chars allow.' })
  title: string;

  body: string;
}
