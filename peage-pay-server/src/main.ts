import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Env } from './shared/config/env.type';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { PrismaExceptionFilter } from './shared/filters/prisma-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService<Env>);

  app.enableCors({
    credentials: true,
    origin: [
      configService.getOrThrow<string>('GENERAL_ADMIN_PANEL_URL'),
      configService.getOrThrow<string>('HUMAN_RESSOURCES_PANEL_URL'),
      configService.getOrThrow<string>('TOLL_ADMIN_PANEL_URL'),
      configService.getOrThrow<string>('GATE_ADMIN_PANEL_URL'),
      configService.getOrThrow<string>('AUTH_COMMON_CLIENT_URL'),
      configService.getOrThrow<string>('MODERATOR_ADMIN_PANEL_URL'),
      configService.getOrThrow<string>('MODERATOR_BADGE_READER_URL'),
      configService.getOrThrow<string>('TICKET_PRINTER_URL'),
    ],
  });
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new PrismaExceptionFilter());

  await app.listen(configService.getOrThrow<number>('PORT'));
  Logger.debug('Application running on http://localhost:3000/');
  Logger.debug('Graphql sandbox running on http://localhost:3000/graphql');
}
bootstrap();
