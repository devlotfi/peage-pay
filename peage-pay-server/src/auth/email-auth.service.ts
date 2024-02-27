import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { SignUpWithEmailInput } from './input/sign-up-with-email.input';
import { GraphQLError } from 'graphql';
import { compare } from 'bcrypt';
import { EmailService } from 'src/email/email.service';
import { AuthErrors } from './graphql/auth-errors.graphql';
import { VerifyEmailInput } from './input/verify-email.input';
import { UserErrors } from 'src/user/graphql/user-errors.graphql';
import { Utils } from 'src/utils';
import { SigninWithEmailInput } from './input/sign-in-with-email.input';
import { RefreshTokenMode } from './graphql/refresh-token-mode.graphql';
import { SignInWithEmailResult } from './result/sign-in-with-email.result';
import { BaseUserType } from 'src/user/graphql/base-user.graphql';
import { GraphQLExecutionContext } from '@nestjs/graphql';
import { TokenService } from 'src/token/token.service';
import { SendResetPasswordEmailInput } from './input/send-reset-password-email.input';
import { AuthRedisService } from './auth-redis.service';
import { ResetPasswordInput } from './input/reset-password.input';

@Injectable()
export class EmailAuthService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly emailService: EmailService,
    private readonly tokenService: TokenService,
    private readonly authRedisService: AuthRedisService,
  ) {}

  public async signUpWithEmail(
    signUpWithEmailInput: SignUpWithEmailInput,
  ): Promise<boolean> {
    const existingUser = await this.databaseService.emailAuthMethod.findFirst({
      where: {
        email: signUpWithEmailInput.email,
      },
    });
    if (existingUser) {
      throw new GraphQLError(UserErrors.USER_WITH_EMAIL_EXISTS);
    }

    const hashedPassword = await Utils.hashString(
      signUpWithEmailInput.password,
    );

    const baseUser = await this.databaseService.baseUser.create({
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

    await this.emailService.sendVerificationEmail(
      baseUser.id,
      baseUser.authMethod?.emailAuthMethod?.email as any,
    );

    return true;
  }

  public async verifyEmail(
    verifyEmailInput: VerifyEmailInput,
  ): Promise<boolean> {
    const baseUser = await this.databaseService.baseUser.findFirst({
      where: {
        id: verifyEmailInput.userId,
      },
      include: {
        verificationToken: true,
        authMethod: {
          include: {
            emailAuthMethod: true,
          },
        },
      },
    });
    if (!baseUser) {
      throw new GraphQLError(UserErrors.USER_NOT_FOUND);
    }
    if (!baseUser.verificationToken) {
      throw new GraphQLError(AuthErrors.VERIFICATION_TOKEN_NOT_FOUND);
    }
    if (!baseUser.authMethod || !baseUser.authMethod.emailAuthMethod) {
      throw new GraphQLError(AuthErrors.EMAIL_AUTH_NOT_FOUND);
    }
    if (baseUser.authMethod.emailAuthMethod.verifiedAt) {
      throw new GraphQLError(AuthErrors.EMAIL_ALREADY_VERIFIED);
    }
    if (new Date() > baseUser.verificationToken.expiresAt) {
      throw new GraphQLError(AuthErrors.VERIFICATION_TOKEN_EXPIRED);
    }

    console.log(baseUser);

    const result = await compare(
      verifyEmailInput.token,
      baseUser.verificationToken.tokenHash,
    );
    if (!result) {
      throw new GraphQLError(AuthErrors.INVALID_VERIFICATION_TOKEN);
    }

    await this.databaseService.emailAuthMethod.update({
      data: {
        verifiedAt: new Date(),
      },
      where: {
        authMethodId: baseUser.authMethod.id,
      },
    });

    return true;
  }

  public async sendPasswordResetEmail(
    sendPasswordResetEmailInput: SendResetPasswordEmailInput,
  ): Promise<boolean> {
    const emailAuthMethod =
      await this.databaseService.emailAuthMethod.findUnique({
        where: {
          email: sendPasswordResetEmailInput.email,
        },
        include: {
          authMethod: true,
        },
      });
    if (!emailAuthMethod) {
      throw new GraphQLError(UserErrors.USER_NOT_FOUND);
    }

    const passwordResetAttempts =
      await this.authRedisService.getPasswordResetAttempts(
        emailAuthMethod.authMethod.userId,
      );
    if (passwordResetAttempts < 1) {
      throw new GraphQLError(AuthErrors.PASSWORD_RESET_ATTEMPTS_EXCEEDED);
    }

    await this.authRedisService.decrementPasswordResetAttempts(
      emailAuthMethod.authMethod.userId,
    );
    await this.emailService.sendPasswordResetEmail(
      emailAuthMethod.authMethod.userId,
      emailAuthMethod.email,
    );
    return true;
  }

  public async resetPassword(
    resetPasswordInput: ResetPasswordInput,
  ): Promise<boolean> {
    const baseUser = await this.databaseService.baseUser.findFirst({
      where: {
        id: resetPasswordInput.userId,
      },
      include: {
        verificationToken: true,
        authMethod: {
          include: {
            emailAuthMethod: true,
          },
        },
      },
    });
    if (!baseUser) {
      throw new GraphQLError(UserErrors.USER_NOT_FOUND);
    }
    if (!baseUser.verificationToken) {
      throw new GraphQLError(AuthErrors.VERIFICATION_TOKEN_NOT_FOUND);
    }
    if (!baseUser.authMethod || !baseUser.authMethod.emailAuthMethod) {
      throw new GraphQLError(AuthErrors.EMAIL_AUTH_NOT_FOUND);
    }
    if (new Date() > baseUser.verificationToken.expiresAt) {
      throw new GraphQLError(AuthErrors.VERIFICATION_TOKEN_EXPIRED);
    }

    console.log(baseUser);

    const result = await compare(
      resetPasswordInput.token,
      baseUser.verificationToken.tokenHash,
    );
    if (!result) {
      throw new GraphQLError(AuthErrors.INVALID_VERIFICATION_TOKEN);
    }

    await this.databaseService.emailAuthMethod.update({
      data: {
        passwordHash: await Utils.hashString(resetPasswordInput.password),
      },
      where: {
        authMethodId: baseUser.authMethod.id,
      },
    });
    return true;
  }

  public async signInWithEmail(
    signInWithEmailInput: SigninWithEmailInput,
    refreshTokenMode: RefreshTokenMode,
    context: GraphQLExecutionContext,
  ): Promise<SignInWithEmailResult> {
    const emailAuthMethod =
      await this.databaseService.emailAuthMethod.findFirst({
        where: {
          email: signInWithEmailInput.email,
        },
        include: {
          authMethod: {
            include: {
              baseUser: true,
            },
          },
        },
      });
    if (!emailAuthMethod) {
      throw new GraphQLError(UserErrors.USER_NOT_FOUND);
    }
    if (!emailAuthMethod.verifiedAt) {
      const emailVerificationAttempts =
        await this.authRedisService.getEmailVerificationAttempts(
          emailAuthMethod.authMethod.userId,
        );
      if (emailVerificationAttempts < 1) {
        throw new GraphQLError(AuthErrors.EMAIL_VERIFICATION_ATTEMPTS_EXCEEDED);
      }

      await this.emailService.sendVerificationEmail(
        emailAuthMethod.authMethod.userId,
        emailAuthMethod.email,
      );
      await this.authRedisService.decrementEmailVerificationAttempts(
        emailAuthMethod.authMethod.userId,
      );
      throw new GraphQLError(AuthErrors.VERIFICATION_REQUEST_PENDING);
    }

    const signInWithEmailAttempts =
      await this.authRedisService.getSignInWithEmailAttempts(
        emailAuthMethod.authMethod.userId,
      );
    if (signInWithEmailAttempts < 1) {
      throw new GraphQLError(AuthErrors.SIGN_IN_WITH_EMAIl_ATTEMPTS_EXCEEDED);
    }

    const result = await compare(
      signInWithEmailInput.password,
      emailAuthMethod.passwordHash,
    );
    if (!result) {
      await this.authRedisService.decrementSignInWithEmailAttempts(
        emailAuthMethod.authMethod.userId,
      );
      throw new GraphQLError(AuthErrors.INVALID_EMAIL_OR_PASSWORD);
    }

    const refreshToken = await this.tokenService.generateRefreshToken(
      emailAuthMethod.authMethod.userId,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      context.req,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      context.res,
      refreshTokenMode,
    );
    const signInWithEmailResult = new SignInWithEmailResult();
    signInWithEmailResult.baseUser = emailAuthMethod.authMethod
      .baseUser as BaseUserType;
    if (refreshTokenMode === RefreshTokenMode.PLAIN_TEXT) {
      signInWithEmailResult.refreshToken = refreshToken;
    }

    return signInWithEmailResult;
  }
}
