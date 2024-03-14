import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { SignUpWithEmailInput } from './input/sign-up-with-email.input.gql';
import { GraphQLError } from 'graphql';
import { compare } from 'bcrypt';
import { EmailService } from 'src/email/email.service';
import { AuthErrors } from './graphql/auth-errors.gql';
import { VerifyEmailInput } from './input/verify-email.input.gql';
import { BaseUserErrors } from 'src/base-user/graphql/base-user-errors.gql';
import { Utils } from 'src/shared/utils';
import { SigninWithEmailInput } from './input/sign-in-with-email.input.gql';
import { RefreshTokenMode } from './graphql/refresh-token-mode.gql';
import { SignInResult } from './result/sign-in.result.gql';
import { TokenService } from 'src/token/token.service';
import { SendResetPasswordEmailInput } from './input/send-reset-password-email.input.gql';
import { AuthRedisService } from './auth-redis.service';
import { ResetPasswordInput } from './input/reset-password.input.gql';
import { Request, Response } from 'express';
import { BaseUserService } from 'src/base-user/base-user.service';
import { Prisma } from '@prisma/client';
import { TokenErrors } from 'src/token/graphql/token-errors.gql';

@Injectable()
export class EmailAuthService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly emailService: EmailService,
    private readonly tokenService: TokenService,
    private readonly baseUserService: BaseUserService,
    private readonly authRedisService: AuthRedisService,
  ) {}

  public async signUpWithEmail(
    signUpWithEmailInput: SignUpWithEmailInput,
  ): Promise<boolean> {
    const hashedPassword = await Utils.hashString(
      signUpWithEmailInput.password,
    );

    try {
      const baseUser = await this.databaseService.baseUser.create({
        data: {
          firstName: signUpWithEmailInput.firstName,
          lastName: signUpWithEmailInput.lastName,
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
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new GraphQLError(BaseUserErrors.BASE_USER_WITH_EMAIL_EXISTS);
        }
      }
      throw error;
    }
  }

  public async verifyEmail(
    verifyEmailInput: VerifyEmailInput,
  ): Promise<boolean> {
    const baseUser = await this.databaseService.baseUser.findUnique({
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
      throw new GraphQLError(BaseUserErrors.BASE_USER_NOT_FOUND);
    }
    if (!baseUser.verificationToken) {
      throw new GraphQLError(TokenErrors.VERIFICATION_TOKEN_NOT_FOUND);
    }
    if (!baseUser.authMethod || !baseUser.authMethod.emailAuthMethod) {
      throw new GraphQLError(AuthErrors.EMAIL_AUTH_NOT_FOUND);
    }
    if (baseUser.authMethod.emailAuthMethod.verifiedAt) {
      throw new GraphQLError(AuthErrors.EMAIL_ALREADY_VERIFIED);
    }
    if (new Date() > baseUser.verificationToken.expiresAt) {
      throw new GraphQLError(TokenErrors.VERIFICATION_TOKEN_EXPIRED);
    }

    console.log(baseUser);

    const result = await compare(
      verifyEmailInput.token,
      baseUser.verificationToken.tokenHash,
    );
    if (!result) {
      throw new GraphQLError(TokenErrors.INVALID_VERIFICATION_TOKEN);
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
      throw new GraphQLError(BaseUserErrors.BASE_USER_NOT_FOUND);
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
    const baseUser = await this.databaseService.baseUser.findUnique({
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
      throw new GraphQLError(BaseUserErrors.BASE_USER_NOT_FOUND);
    }
    if (!baseUser.verificationToken) {
      throw new GraphQLError(TokenErrors.VERIFICATION_TOKEN_NOT_FOUND);
    }
    if (!baseUser.authMethod || !baseUser.authMethod.emailAuthMethod) {
      throw new GraphQLError(AuthErrors.EMAIL_AUTH_NOT_FOUND);
    }
    if (new Date() > baseUser.verificationToken.expiresAt) {
      throw new GraphQLError(TokenErrors.VERIFICATION_TOKEN_EXPIRED);
    }

    console.log(baseUser);

    const result = await compare(
      resetPasswordInput.token,
      baseUser.verificationToken.tokenHash,
    );
    if (!result) {
      throw new GraphQLError(TokenErrors.INVALID_VERIFICATION_TOKEN);
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
    req: Request,
    res: Response,
  ): Promise<SignInResult> {
    const emailAuthMethod =
      await this.databaseService.emailAuthMethod.findUnique({
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
      throw new GraphQLError(BaseUserErrors.BASE_USER_NOT_FOUND);
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

    const refreshToken = await this.tokenService.generateRefreshToken(
      emailAuthMethod.authMethod.userId,
      req,
      res,
      refreshTokenMode,
    );
    const accessToken = await this.tokenService.generateAccessToken(
      emailAuthMethod.authMethod.userId,
    );
    const roles = await this.baseUserService.getUserRolesList(
      emailAuthMethod.authMethod.userId,
    );
    const signInResult = new SignInResult(
      emailAuthMethod.authMethod.baseUser as any,
      accessToken,
      roles,
      refreshTokenMode === RefreshTokenMode.PLAIN_TEXT
        ? refreshToken
        : undefined,
    );

    return signInResult;
  }
}
