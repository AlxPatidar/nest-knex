import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Body,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly postsService: UsersService) {}

  @Get()
  async findAll() {
    const users = await this.postsService.findAll();
    return users;
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    const post = await this.postsService.findById(id);
    return post;
  }
  @Post()
  create(@Body() user: CreateUserDto) {
    return this.postsService.create(user);
  }
}
