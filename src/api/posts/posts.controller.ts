import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

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
}
