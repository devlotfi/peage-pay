import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(DatabaseService.name);

  public async onModuleInit(): Promise<void> {
    await this.$connect();
    this.logger.debug('Successfully connected to database');
  }

  public async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
    this.logger.debug('Disconnected from database');
  }
}
