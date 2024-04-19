import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { createClient } from 'redis';
import { Env } from 'src/shared/config/env.type';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  public constructor(private readonly configService: ConfigService<Env>) {}

  private readonly logger = new Logger(RedisService.name);

  private _client = createClient({
    url: this.configService.getOrThrow<string>('REDIS_URL'),
  });

  private _pubSubClient = new RedisPubSub({
    publisher: new Redis(this.configService.getOrThrow<string>('REDIS_URL')),
    subscriber: new Redis(this.configService.getOrThrow<string>('REDIS_URL')),
  });

  public get client() {
    return this._client;
  }
  public get pubSubClient() {
    return this._pubSubClient;
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
