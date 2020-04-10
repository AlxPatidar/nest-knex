import { IsNotEmpty, MinLength, MaxLength, IsInt } from 'class-validator';

export class UpdateCommentDto {
  @IsNotEmpty({ message: 'commentId is required' })
  @IsInt({ message: 'Comment id must be integer' })
  commentId: number;

  @IsNotEmpty({ message: 'comment is required' })
  @MinLength(5, { message: 'comment must have 6 chars' })
  @MaxLength(90, { message: 'comment is too long. only 90 chars allow.' })
  comment: string;
}
