import { OnQueueActive, Process, Processor } from '@nestjs/bull';
import { ConfigService } from '@nestjs/config';
import { Job } from 'bull';
import { BullProcesses } from 'src/constants/bull-processes';
import { BullQueues } from 'src/constants/bull-queues';
import * as nodemailer from 'nodemailer';
import { SendVerificationEmail } from 'src/jobs/send-verification-email.type';

@Processor(BullQueues.EMAIL)
export class EmailProcessor {
  public constructor(private readonly configService: ConfigService) {}

  private transporter = nodemailer.createTransport({
    host: this.configService.getOrThrow<string>('SMTP_HOST'),
    port: this.configService.getOrThrow<number>('SMTP_PORT'),
    secure: this.configService.getOrThrow<boolean>('SMTP_SECURE'),
    auth: {
      user: this.configService.getOrThrow<string>('SMTP_USER'),
      pass: this.configService.getOrThrow<string>('SMTP_PASSWORD'),
    },
  });

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }

  @Process(BullProcesses.SEND_VERIFICATION_EMAIL)
  public async handleSendVerificationEmail(job: Job<SendVerificationEmail>) {
    console.log('running job');

    console.log(job.data);

    await this.transporter.sendMail({
      from: this.configService.getOrThrow<string>('SMTP_USER'),
      to: job.data.email,
      subject: 'PeagePay account verification',
      text: `Your verification link is ${job.data.verificationUrl}`,
    });
  }
}
