import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Env } from './config/env.type';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService<Env>);

  const port: number = configService.getOrThrow<number>('PORT');

  await app.listen(port);
  Logger.debug('Application running on http://localhost:3000/');
  Logger.debug('Graphql sandbox running on http://localhost:3000/graphql');
}
bootstrap();
