import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { SignUpWithEmailInput } from './input/sign-up-with-email.input';
import { GraphQLError } from 'graphql';
import { genSalt, hash } from 'bcrypt';
import { EmailService } from 'src/email/email.service';
import { AuthErrors } from './auth-errors';
import { randomBytes } from 'crypto';
import { URL } from 'url';
import { ConfigService } from '@nestjs/config';
import { Env } from 'src/config/env.type';

@Injectable()
export class AuthService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly emailService: EmailService,
    private readonly configService: ConfigService<Env>,
  ) {}

  public async hashString(password: string): Promise<string> {
    const salt = await genSalt();
    const hashedPassword = hash(password, salt);
    return hashedPassword;
  }

  public generateVerificationUrl(userId: string) {
    const token = randomBytes(64).toString('hex');
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

  public async signUpWithEmail(
    signUpWithEmailInput: SignUpWithEmailInput,
  ): Promise<boolean> {
    return this.databaseService.$transaction(async (prisma) => {
      const existingUser = await prisma.emailAuthMethod.findFirst({
        where: {
          email: signUpWithEmailInput.email,
        },
      });
      console.log(existingUser);

      if (existingUser) {
        throw new GraphQLError(AuthErrors.USER_WITH_EMAIL_EXISTS);
      }

      const hashedPassword = await this.hashString(
        signUpWithEmailInput.password,
      );

      const baseUser = await prisma.baseUser.create({
        data: {
          firstName: signUpWithEmailInput.firstName,
          lastName: signUpWithEmailInput.lastName,
          birthDate: signUpWithEmailInput.birthDate,
          gender: signUpWithEmailInput.gender,
          user: {
            create: {},
          },
          authMethod: {
            create: {
              emailAuthMethod: {
                create: {
                  email: signUpWithEmailInput.email,
                  passwordHash: hashedPassword,
                },
              },
            },
          },
        },
        include: {
          authMethod: {
            include: {
              emailAuthMethod: true,
            },
          },
        },
      });

      console.log(baseUser);

      const { token, verificationUrl } = this.generateVerificationUrl(
        baseUser.id,
      );

      const hashedToken = await this.hashString(token);
      await prisma.verificationToken.create({
        data: {
          tokenHash: hashedToken,
          user: {
            connect: {
              id: baseUser.id,
            },
          },
        },
      });

      await this.emailService.sendVerificationEmail(
        baseUser.id,
        baseUser.authMethod?.emailAuthMethod?.email as any,
        verificationUrl,
      );

      return true;
    });
  }
}
