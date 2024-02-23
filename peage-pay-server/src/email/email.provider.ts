import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailProvider {
  public constructor(private readonly configService: ConfigService) {}

  private readonly _transporter = nodemailer.createTransport({
    host: this.configService.getOrThrow<string>('SMTP_HOST'),
    port: this.configService.getOrThrow<number>('SMTP_PORT'),
    secure: this.configService.getOrThrow<boolean>('SMTP_SECURE'),
    auth: {
      user: this.configService.getOrThrow<string>('SMTP_USER'),
      pass: this.configService.getOrThrow<string>('SMTP_PASSWORD'),
    },
  });

  public get transporter() {
    return this._transporter;
  }
}
