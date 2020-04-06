import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    CommentsModule,
    PostsModule,
    UsersModule,
  ],
  providers: [],
})
export class ApiModule { }
