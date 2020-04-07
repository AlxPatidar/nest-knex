import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentService: CommentsService) { }

  @Get()
  // get all comments
  async findAll() {
    const comments = await this.commentService.findAll();
    return comments;
  }

  @Get(':id')
  // get comment details by commentId
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    const comment = await this.commentService.findById(id);
    return comment;
  }
}
