import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Env } from 'src/config/env.type';
import { Twilio } from 'twilio';

@Injectable()
export class TwilioService {
  public constructor(private readonly configService: ConfigService<Env>) {}

  private readonly _twilioClient = new Twilio(
    this.configService.getOrThrow<string>('TWILIO_ACCOUNT'),
    this.configService.getOrThrow<string>('TWILIO_AUTH_TOKEN'),
  );

  public get twilioClient() {
    return this._twilioClient;
  }
}
