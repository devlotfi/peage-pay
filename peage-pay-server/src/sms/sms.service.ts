import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { BullProcesses } from 'src/constants/bull-processes';
import { BullQueues } from 'src/constants/bull-queues';

@Injectable()
export class SmsService {
  public constructor(
    @InjectQueue(BullQueues.SMS) private readonly smsQueue: Queue,
  ) {}

  public async sendVerificationSms(
    userId: string,
    phoneNumber: string,
  ): Promise<void> {
    await this.smsQueue.add(
      BullProcesses.SEND_VERIFICATION_SMS,
      {
        userId,
        phoneNumber,
      },
      {
        delay: 3000,
      },
    );
  }
}
