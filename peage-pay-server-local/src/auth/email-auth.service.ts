import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { SignUpWithEmailInput } from './input/sign-up-with-email.input.gql';
import { GraphQLError } from 'graphql';
import { compare } from 'bcrypt';
import { EmailService } from 'src/email/email.service';
import { AuthErrors } from './graphql/auth-errors.gql';
import { VerifyEmailInput } from './input/verify-email.input.gql';
import { Utils } from 'src/shared/utils';
import { SigninWithEmailInput } from './input/sign-in-with-email.input.gql';
import { RefreshTokenMode } from './graphql/refresh-token-mode.gql';
import { SignInResult } from './result/sign-in.result.gql';
import { UserTokenService } from 'src/token/user-token.service';
import { SendResetPasswordEmailInput } from './input/send-reset-password-email.input.gql';
import { ResetPasswordInput } from './input/reset-password.input.gql';
import { Request, Response } from 'express';
import { BaseUserService } from 'src/user/base-user.service';
import { TokenErrors } from 'src/token/graphql/token-errors.gql';
import { PrismaErrors } from 'src/shared/graphql/prisma-errors.gql';

@Injectable()
export class EmailAuthService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly emailService: EmailService,
    private readonly userTokenService: UserTokenService,
    private readonly baseUserService: BaseUserService,
  ) {}

  public async signUpWithEmail(
    signUpWithEmailInput: SignUpWithEmailInput,
  ): Promise<boolean> {
    const hashedPassword = await Utils.hashString(
      signUpWithEmailInput.password,
    );

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

    await this.emailService.sendVerificationEmail(
      baseUser.id,
      baseUser.authMethod?.emailAuthMethod?.email as any,
    );

    return true;
  }

  public async verifyEmail(
    verifyEmailInput: VerifyEmailInput,
  ): Promise<boolean> {
    const baseUser = await this.databaseService.baseUser.findUniqueOrThrow({
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
    if (
      !baseUser ||
      !baseUser.verificationToken ||
      !baseUser.authMethod ||
      !baseUser.authMethod.emailAuthMethod
    ) {
      throw new GraphQLError(PrismaErrors.NOT_FOUND);
    }
    if (baseUser.authMethod.emailAuthMethod.verifiedAt) {
      throw new GraphQLError(AuthErrors.EMAIL_ALREADY_VERIFIED);
    }
    if (new Date() > baseUser.verificationToken.expiresAt) {
      throw new GraphQLError(TokenErrors.VERIFICATION_TOKEN_EXPIRED);
    }

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
      await this.databaseService.emailAuthMethod.findUniqueOrThrow({
        where: {
          email: sendPasswordResetEmailInput.email,
        },
        include: {
          authMethod: true,
        },
      });

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
    if (
      !baseUser ||
      !baseUser.verificationToken ||
      !baseUser.authMethod ||
      !baseUser.authMethod.emailAuthMethod
    ) {
      throw new GraphQLError(PrismaErrors.NOT_FOUND);
    }
    if (new Date() > baseUser.verificationToken.expiresAt) {
      throw new GraphQLError(TokenErrors.VERIFICATION_TOKEN_EXPIRED);
    }

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
      await this.databaseService.emailAuthMethod.findUniqueOrThrow({
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

    const result = await compare(
      signInWithEmailInput.password,
      emailAuthMethod.passwordHash,
    );
    if (!result) {
      throw new GraphQLError(AuthErrors.INVALID_EMAIL_OR_PASSWORD);
    }
    if (!emailAuthMethod.verifiedAt) {
      await this.emailService.sendVerificationEmail(
        emailAuthMethod.authMethod.userId,
        emailAuthMethod.email,
      );
      throw new GraphQLError(AuthErrors.VERIFICATION_REQUEST_PENDING);
    }

    const refreshToken = await this.userTokenService.generateRefreshToken(
      emailAuthMethod.authMethod.userId,
      req,
      res,
      refreshTokenMode,
    );
    const accessToken = await this.userTokenService.generateAccessToken(
      emailAuthMethod.authMethod.userId,
    );
    const roles = await this.baseUserService.getUserRolesList(
      emailAuthMethod.authMethod.userId,
    );

    return {
      accessToken,
      roles,
      baseUser: emailAuthMethod.authMethod.baseUser as any,
      refreshToken:
        refreshTokenMode === RefreshTokenMode.PLAIN_TEXT
          ? refreshToken
          : undefined,
    };
  }
}
