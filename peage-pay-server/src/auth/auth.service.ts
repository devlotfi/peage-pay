import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { SignUpWithEmailInput } from './input/sign-up-with-email.input';
import { GraphQLError } from 'graphql';
import { compare } from 'bcrypt';
import { EmailService } from 'src/email/email.service';
import { AuthErrors } from './auth-errors';
import { ConfigService } from '@nestjs/config';
import { Env } from 'src/config/env.type';
import { VerifyEmailInput } from './input/verify-email.input';
import { UserErrors } from 'src/user/user-errors';
import { SignUpWithPhoneInput } from './input/sign-up-with-phone.input';
import { Utils } from 'src/utils';
import { SigninWithEmailInput } from './input/sign-in-with-email.input';
import { RefreshTokenMode } from './graphql/refresh-token-mode.graphql';
import { SignInWithEmailResult } from './result/sign-in-with-email.result';
import { BaseUserType } from 'src/user/graphql/base-user.graphql';
import { JwtService } from '@nestjs/jwt';
import { GraphQLExecutionContext } from '@nestjs/graphql';
import { TokenService } from 'src/token/token.service';
import { SignInWithRefreshTokenResult } from './result/sign-in-with-refresh-token.result';
import { RedisService } from 'src/redis/redis.service';
import { SignInWithRefreshTokenInput } from './input/sign-in-with-refresh-token.input';

@Injectable()
export class AuthService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly emailService: EmailService,
    private readonly configService: ConfigService<Env>,
    private readonly tokenService: TokenService,
    private readonly redisService: RedisService,
    private readonly jwtService: JwtService,
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
      throw new GraphQLError(AuthErrors.USER_WITH_EMAIL_EXISTS);
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

  public async signUpWithPhone(
    signUpWithPhoneInput: SignUpWithPhoneInput,
  ): Promise<boolean> {
    const existingUser = await this.databaseService.phoneAuthMethod.findFirst({
      where: {
        phoneNumber: signUpWithPhoneInput.phoneNumber,
      },
    });
    if (existingUser) {
      throw new GraphQLError(AuthErrors.USER_WITH_PHONE_EXISTS);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const baseUser = await this.databaseService.baseUser.create({
      data: {
        firstName: signUpWithPhoneInput.firstName,
        lastName: signUpWithPhoneInput.lastName,
        birthDate: signUpWithPhoneInput.birthDate,
        gender: signUpWithPhoneInput.gender,
        user: {
          create: {},
        },
        authMethod: {
          create: {
            phoneAuthMethod: {
              create: {
                phoneNumber: signUpWithPhoneInput.phoneNumber,
              },
            },
          },
        },
      },
      include: {
        authMethod: {
          include: {
            phoneAuthMethod: true,
          },
        },
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

    const result = await compare(
      signInWithEmailInput.password,
      emailAuthMethod.passwordHash,
    );
    if (!result) {
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

  public async signInWithRefreshToken(
    signInWithRefreshTokenInput: SignInWithRefreshTokenInput,
  ): Promise<SignInWithRefreshTokenResult> {
    const { payload, valid } = await this.tokenService.checkRefreshToken(
      signInWithRefreshTokenInput.refreshToken,
    );
    if (!valid) {
      throw new GraphQLError(AuthErrors.INVALID_REFRESH_TOKEN);
    }

    console.log(payload);
    const userId: string = payload.userId;
    const baseUser = await this.databaseService.baseUser.findFirst({
      where: {
        id: userId,
      },
    });
    const accessToken = await this.tokenService.generateAccessToken(userId);

    const signInWithRefreshTokenResult = new SignInWithRefreshTokenResult();
    signInWithRefreshTokenResult.accessToken = accessToken;
    signInWithRefreshTokenResult.baseUser = baseUser as BaseUserType;

    return signInWithRefreshTokenResult;
  }

  public async signInWithRefreshTokenCookie(
    context: GraphQLExecutionContext,
  ): Promise<SignInWithRefreshTokenResult> {
    const { payload, valid, refreshToken } =
      await this.tokenService.checkRefreshTokenCookie(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        context.req,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        context.res,
      );
    if (!refreshToken) {
      throw new GraphQLError(AuthErrors.REFRESH_TOKEN_NOT_PROVIDED);
    }
    if (!valid) {
      throw new GraphQLError(AuthErrors.INVALID_REFRESH_TOKEN);
    }

    console.log(payload);
    const userId: string = payload.userId;
    const baseUser = await this.databaseService.baseUser.findFirst({
      where: {
        id: userId,
      },
    });
    const accessToken = await this.tokenService.generateAccessToken(userId);

    const signInWithRefreshTokenResult = new SignInWithRefreshTokenResult();
    signInWithRefreshTokenResult.accessToken = accessToken;
    signInWithRefreshTokenResult.baseUser = baseUser as BaseUserType;

    return signInWithRefreshTokenResult;
  }
}
