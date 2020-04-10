import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';
import { CustomValidatePipe } from './shared/pipes/validation.pipes';

// Read port number from env file
const port = process.env.PORT || 4001;

async function bootstrap() {
  // Create nestFactory instance for make server instance
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Custome validation on request using pipe and class-validator
  app.useGlobalPipes(new CustomValidatePipe());

  // Add prefix to all api for request
  app.setGlobalPrefix('api/v1');

  Logger.log(`🚀  Server ready at http://localhost:${port} `, 'ServerStarted');
  // Run server on port
  await app.listen(port);
}
bootstrap();
