import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
  providers: [CommentsService],
  controllers: [CommentsController],
})
export class CommentsModule {}
