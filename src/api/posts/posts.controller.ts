import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Body,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreateCommentDto } from '../comments/dto/create-comment.dto';
import { UpdateCommentDto } from '../comments/dto/update-comment.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  // find all post
  async findAll() {
    const post = await this.postsService.findAll();
    return post;
  }

  @Get(':id')
  // find post with details
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    const post = await this.postsService.findById(id);
    return post;
  }
  @Post()
  // create comment on post
  async create(@Body() payload: CreateCommentDto) {
    return this.postsService.create(payload);
  }

  @Put()
  // update commnet on post
  update(@Body() payload: UpdateCommentDto) {
    return this.postsService.update(payload);
  }

  @Delete(':postId')
  // delete post by id
  deleteById(@Param('postId') postId: number) {
    return this.postsService.deleteById(postId);
  }
}
