import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsService } from './comments/comments.service';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [UsersModule, PostsModule, CommentsModule],
  providers: [CommentsService]
})
export class ApiModule {}
