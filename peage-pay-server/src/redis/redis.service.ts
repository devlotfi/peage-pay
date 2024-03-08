import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from 'redis';
import { Env } from 'src/shared/config/env.type';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  public constructor(private readonly configService: ConfigService<Env>) {}

  private readonly logger = new Logger(RedisService.name);

  private _client = createClient({
    username: this.configService.getOrThrow<string>('REDIS_USERNAME'),
    password: this.configService.getOrThrow<string>('REDIS_PASSWORD'),
    socket: {
      host: this.configService.getOrThrow<string>('REDIS_HOST'),
      port: this.configService.getOrThrow<number>('REDIS_PORT'),
    },
  });

  public get client() {
    return this._client;
  }

  public async onModuleInit(): Promise<void> {
    await this._client.connect();
    this.logger.debug('Successfully connected to redis');
  }

  public async onModuleDestroy(): Promise<void> {
    await this._client.disconnect();
    this.logger.debug('Disconnected from redis');
  }
}
