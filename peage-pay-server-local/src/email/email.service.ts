import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseService } from 'src/database/database.service';
import { BullProcesses } from 'src/shared/constants/bull-processes';
import { UserTokenService } from 'src/token/user-token.service';
import { NodemailerService } from './nodemailer.service';
import { Utils } from 'src/shared/utils';

@Injectable()
export class EmailService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly configService: ConfigService,
    private readonly tokenService: UserTokenService,
    private readonly nodeMailerService: NodemailerService,
  ) {}

  public async sendVerificationEmail(
    userId: string,
    email: string,
  ): Promise<void> {
    const { token, verificationUrl } =
      this.tokenService.generateVerificationUrl(userId);
    const hashedToken = await Utils.hashString(token);
    const expirationDate = new Date();
    expirationDate.setMinutes(expirationDate.getMinutes() + 30);

    await this.databaseService.verificationToken.deleteMany({
      where: {
        userId: userId,
      },
    });
    await this.databaseService.verificationToken.create({
      data: {
        tokenHash: hashedToken,
        expiresAt: expirationDate,
        baseUser: {
          connect: {
            id: userId,
          },
        },
      },
    });

    await this.nodeMailerService.transporter.sendMail({
      from: this.configService.getOrThrow<string>('SMTP_USER'),
      to: email,
      subject: 'PeagePay account verification',
      text: `Your verification link is ${verificationUrl}`,
    });
  }

  public async sendPasswordResetEmail(
    userId: string,
    email: string,
  ): Promise<void> {
    const { token, passwordResetUrl } =
      this.tokenService.generatePasswordResetUrl(userId);
    const hashedToken = await Utils.hashString(token);
    const expirationDate = new Date();
    expirationDate.setMinutes(expirationDate.getMinutes() + 30);

    await this.databaseService.verificationToken.deleteMany({
      where: {
        userId: userId,
      },
    });
    await this.databaseService.verificationToken.create({
      data: {
        tokenHash: hashedToken,
        expiresAt: expirationDate,
        baseUser: {
          connect: {
            id: userId,
          },
        },
      },
    });

    await this.nodeMailerService.transporter.sendMail({
      from: this.configService.getOrThrow<string>('SMTP_USER'),
      to: email,
      subject: 'PeagePay password reset',
      text: `Your password reset link is ${passwordResetUrl}`,
    });
  }
}
