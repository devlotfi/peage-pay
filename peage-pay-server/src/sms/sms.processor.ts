import { OnQueueActive, Process, Processor } from '@nestjs/bull';
import { ConfigService } from '@nestjs/config';
import { Job } from 'bull';
import { BullQueues } from 'src/constants/bull-queues';
import { DatabaseService } from 'src/database/database.service';
import { Env } from 'src/config/env.type';
import { BullProcesses } from 'src/constants/bull-processes';
import { SendVerificationSms } from 'src/jobs/send-verification-sms.type';
import { TwilioService } from './twilio.service';

@Processor(BullQueues.SMS)
export class SmsProcessor {
  public constructor(
    private readonly configService: ConfigService<Env>,
    private readonly twilioService: TwilioService,
    private readonly databaseService: DatabaseService,
  ) {}

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }

  @Process(BullProcesses.SEND_VERIFICATION_SMS)
  public async handleSendVerificationSms(job: Job<SendVerificationSms>) {
    console.log('sending sms');
    console.log(job.data.phoneNumber);

    await this.twilioService.twilioClient.verify.v2
      .services('VAd001785e204070c08a6368ae0618b5f5')
      .verifications.create({
        to: `+213542687187`,
        channel: 'sms',
      });
    console.log('lol');

    return {};
  }
}
