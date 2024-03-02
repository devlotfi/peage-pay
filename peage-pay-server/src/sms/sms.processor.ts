import { OnQueueActive, Processor } from '@nestjs/bull';
import { ConfigService } from '@nestjs/config';
import { Job } from 'bull';
import { BullQueues } from 'src/constants/bull-queues';
import { DatabaseService } from 'src/database/database.service';
import { randomBytes } from 'crypto';
import { URL } from 'url';
import { Env } from 'src/config/env.type';

@Processor(BullQueues.SMS)
export class SmsProcessor {
  public constructor(
    private readonly configService: ConfigService<Env>,
    private readonly databaseService: DatabaseService,
  ) {}

  public generateVerificationCode(userId: string) {
    const tokenLength = 128;
    const size = Math.floor(tokenLength / 2);
    const token = randomBytes(size).toString('hex');
    const webClientUrl = this.configService.getOrThrow<string>(
      'AUTH_COMMON_CLIENT_URL',
    );
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
}
