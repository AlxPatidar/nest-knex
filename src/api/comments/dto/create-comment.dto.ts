import { IsNotEmpty, MinLength, MaxLength, IsInt } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty({ message: 'comment is required' })
  @MinLength(5, { message: 'comment must have 6 chars' })
  @MaxLength(90, { message: 'comment is too long. only 90 chars allow.' })
  comment: string;

  @IsNotEmpty({ message: 'PostId is required' })
  @IsInt({ message: 'PostId must be integer' })
  postId: number;

  @IsNotEmpty({ message: 'UserId is required' })
  @IsInt({ message: 'UserId must be integer' })
  userId: number;
}
