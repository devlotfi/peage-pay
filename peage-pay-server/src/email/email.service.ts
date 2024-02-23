import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Queue } from 'bull';
import { Env } from 'src/config/env.type';
import { BullProcesses } from 'src/constants/bull-processes';
import { BullQueues } from 'src/constants/bull-queues';

@Injectable()
export class EmailService {
  public constructor(
    private readonly configService: ConfigService<Env>,
    @InjectQueue(BullQueues.EMAIL) private readonly emailQueue: Queue,
  ) {}

  public async sendVerificationEmail(
    userId: string,
    email: string,
    verificationUrl: string,
  ): Promise<void> {
    console.log(this.emailQueue.client.status);

    await this.emailQueue.add(
      BullProcesses.SEND_VERIFICATION_EMAIL,
      {
        userId,
        email,
        verificationUrl,
      },
      {
        delay: 3000,
      },
    );
  }
}
