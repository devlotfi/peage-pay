import { OnQueueActive, Process, Processor } from '@nestjs/bull';
import { ConfigService } from '@nestjs/config';
import { Job } from 'bull';
import { BullProcesses } from 'src/constants/bull-processes';
import { BullQueues } from 'src/constants/bull-queues';
import { SendVerificationEmail } from 'src/jobs/send-verification-email.type';
import { DatabaseService } from 'src/database/database.service';
import { randomBytes } from 'crypto';
import { URL } from 'url';
import { Utils } from 'src/utils';

@Processor(BullQueues.SMS)
export class SmsProcessor {
  public constructor(
    private readonly configService: ConfigService,
    private readonly databaseService: DatabaseService,
  ) {}

  public generateVerificationCode(userId: string) {
    const tokenLength = 128;
    const size = Math.floor(tokenLength / 2);
    const token = randomBytes(size).toString('hex');
    const webClientUrl =
      this.configService.getOrThrow<string>('WEB_CLIENT_URL');
    const verificationUrl = new URL(`${webClientUrl}/verify`);

    verificationUrl.searchParams.append('userId', userId);
    verificationUrl.searchParams.append('token', token);

    return {
      verificationUrl: verificationUrl.toString(),
      token,
    };
  }

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }

  @Process(BullProcesses.SEND_VERIFICATION_SMS)
  public async handleSendVerificationEmail(job: Job<SendVerificationEmail>) {
    console.log('running job');

    console.log(job.data);

    const { token, verificationUrl } = this.generateVerificationCode(
      job.data.userId,
    );
    const hashedToken = await Utils.hashString(token);
    const expirationDate = new Date();
    expirationDate.setMinutes(expirationDate.getMinutes() + 30);

    await this.databaseService.verificationToken.create({
      data: {
        tokenHash: hashedToken,
        expiresAt: expirationDate,
        baseUser: {
          connect: {
            id: job.data.userId,
          },
        },
      },
    });
  }
}
