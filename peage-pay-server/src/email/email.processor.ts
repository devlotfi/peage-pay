import { OnQueueActive, Process, Processor } from '@nestjs/bull';
import { ConfigService } from '@nestjs/config';
import { Job } from 'bull';
import { BullProcesses } from 'src/shared/constants/bull-processes';
import { BullQueues } from 'src/shared/constants/bull-queues';
import { SendVerificationEmail } from 'src/shared/jobs/send-verification-email.job';
import { DatabaseService } from 'src/database/database.service';
import { Utils } from 'src/shared/utils';
import { NodemailerService } from './nodemailer.service';
import { TokenService } from 'src/token/token.service';
import { SendResetPasswordEmail } from 'src/shared/jobs/send-reset-password-email.job';

@Processor(BullQueues.EMAIL)
export class EmailProcessor {
  public constructor(
    private readonly configService: ConfigService,
    private readonly databaseService: DatabaseService,
    private readonly nodeMailerService: NodemailerService,
    private readonly tokenService: TokenService,
  ) {}

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

    const { token, verificationUrl } =
      this.tokenService.generateVerificationUrl(job.data.userId);
    const hashedToken = await Utils.hashString(token);
    const expirationDate = new Date();
    expirationDate.setMinutes(expirationDate.getMinutes() + 30);

    await this.databaseService.verificationToken.deleteMany({
      where: {
        userId: job.data.userId,
      },
    });
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

    await this.nodeMailerService.transporter.sendMail({
      from: this.configService.getOrThrow<string>('SMTP_USER'),
      to: job.data.email,
      subject: 'PeagePay account verification',
      text: `Your verification link is ${verificationUrl}`,
    });

    return {};
  }

  @Process(BullProcesses.SEND_PASSWORD_RESET_EMAIL)
  public async handleSendPasswordResetEmail(job: Job<SendResetPasswordEmail>) {
    console.log('running job');

    console.log(job.data);

    const { token, passwordResetUrl } =
      this.tokenService.generatePasswordResetUrl(job.data.userId);
    const hashedToken = await Utils.hashString(token);
    const expirationDate = new Date();
    expirationDate.setMinutes(expirationDate.getMinutes() + 30);

    await this.databaseService.verificationToken.deleteMany({
      where: {
        userId: job.data.userId,
      },
    });
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

    await this.nodeMailerService.transporter.sendMail({
      from: this.configService.getOrThrow<string>('SMTP_USER'),
      to: job.data.email,
      subject: 'PeagePay password reset',
      text: `Your password reset link is ${passwordResetUrl}`,
    });

    return {};
  }
}
