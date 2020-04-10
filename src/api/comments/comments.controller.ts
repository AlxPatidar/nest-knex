import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentService: CommentsService) {}

  @Get()
  // get all comments
  async findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  // get comment details by commentId
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.commentService.findById(id);
  }

  @Post()
  // create comment on post
  async create(@Body() payload: CreateCommentDto) {
    return this.commentService.createComment(payload);
  }

  @Put()
  // update commnet on post
  update(@Body() payload: UpdateCommentDto) {
    return this.commentService.update(payload);
  }

  @Delete(':commentId')
  deleteById(@Param('commentId') postId: number) {
    return this.commentService.deleteById(postId);
  }
}
