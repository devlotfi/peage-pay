import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { BullProcesses } from 'src/constants/bull-processes';
import { BullQueues } from 'src/constants/bull-queues';

@Injectable()
export class EmailService {
  public constructor(
    @InjectQueue(BullQueues.EMAIL) private readonly emailQueue: Queue,
  ) {}

  public async sendVerificationEmail(
    userId: string,
    email: string,
  ): Promise<void> {
    await this.emailQueue.add(
      BullProcesses.SEND_VERIFICATION_EMAIL,
      {
        userId,
        email,
      },
      {
        delay: 3000,
      },
    );
  }

  public async sendPasswordResetEmail(
    userId: string,
    email: string,
  ): Promise<void> {
    await this.emailQueue.add(
      BullProcesses.SEND_PASSWORD_RESET_EMAIL,
      {
        userId,
        email,
      },
      {
        delay: 3000,
      },
    );
  }
}
