import { ChargilyClient } from '@chargily/chargily-pay';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Env } from 'src/shared/config/env.type';

@Injectable()
export class ChargilyService implements OnModuleInit {
  public constructor(private readonly configService: ConfigService<Env>) {}

  private _client: ChargilyClient;

  public get client(): ChargilyClient {
    return this._client;
  }

  public onModuleInit() {
    this._client = new ChargilyClient({
      api_key: this.configService.getOrThrow<string>('CHARGILY_PAY_SECRET_KEY'),
      mode: 'test',
    });
  }
}
