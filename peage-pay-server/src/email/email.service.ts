import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Queue } from 'bull';
import * as nodemailer from 'nodemailer';
import { Env } from 'src/config/env.type';

@Injectable()
export class EmailService {
  public constructor(
    private readonly configService: ConfigService<Env>,
    @InjectQueue('emailQueue') private readonly emailQueue: Queue,
  ) {}

  private transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'peagepay.smtp@gmail.com',
      pass: 'cjnl qtyo wofs sxxn',
    },
  });

  public async sendVerificationEmail(
    userId: string,
    email: string,
    verificationToken: string,
  ): Promise<void> {
    /* await this.transporter.sendMail({
      from: 'peagepay.smtp@gmail.com',
      to: email,
      subject: 'PeagePay verification',//
      text: `Your verification code ${verificationToken} ${userId}`,
    }); */
    console.log(this.emailQueue.client.status);

    await this.emailQueue.add(
      'verificationemail',
      {
        lol: 'lol',
      },
      {
        delay: 3000,
      },
    );
  }
}
