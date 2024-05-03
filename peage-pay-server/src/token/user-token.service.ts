import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { randomBytes } from 'crypto';
import { Request, Response } from 'express';
import * as Cookies from 'cookies';
import { CookieKeys } from 'src/shared/constants/cookie-keys';
import { RefreshTokenMode } from 'src/auth/graphql/refresh-token-mode.gql';
import { DatabaseService } from 'src/database/database.service';
import { Utils } from 'src/shared/utils';
import { BaseUserService } from 'src/user/base-user.service';
import { Env } from 'src/shared/config/env.type';
import { UserRefreshTokenPayload } from 'src/auth/types/user-refresh-token-payload.type';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { google } from 'googleapis';

@Injectable()
export class UserTokenService {
  public constructor(
    private readonly configService: ConfigService<Env>,
    private readonly databaseService: DatabaseService,
    private readonly baseUserService: BaseUserService,
    private readonly jwtService: JwtService,
  ) {}

  public generateVerificationUrl(userId: string) {
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

  public generatePasswordResetUrl(userId: string) {
    const tokenLength = 128;
    const size = Math.floor(tokenLength / 2);
    const token = randomBytes(size).toString('hex');
    const webClientUrl = this.configService.getOrThrow<string>(
      'AUTH_COMMON_CLIENT_URL',
    );
    const passwordResetUrl = new URL(`${webClientUrl}/reset`);

    passwordResetUrl.searchParams.append('userId', userId);
    passwordResetUrl.searchParams.append('token', token);

    return {
      passwordResetUrl: passwordResetUrl.toString(),
      token,
    };
  }

  public async generateRefreshToken(
    userId: string,
    req: Request,
    res: Response,
    refreshTokenMode: RefreshTokenMode,
  ): Promise<string> {
    return this.databaseService.$transaction(async (prisma) => {
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 30);

      const refreshTokenRecord = await prisma.userRefreshToken.create({
        data: {
          tokenHash: '',
          expiresAt: expirationDate,
          baseUser: {
            connect: {
              id: userId,
            },
          },
        },
      });

      const refreshToken = await this.jwtService.signAsync(
        { userId, tokenId: refreshTokenRecord.id },
        {
          expiresIn: '30d',
          secret: this.configService.getOrThrow<string>(
            'USER_JWT_REFRESH_TOKEN_SECRET',
          ),
        },
      );

      await prisma.userRefreshToken.update({
        data: {
          tokenHash: await Utils.hashString(refreshToken),
        },
        where: {
          id: refreshTokenRecord.id,
        },
      });

      if (refreshTokenMode === RefreshTokenMode.COOKIE) {
        const cookies = new Cookies(req, res);
        const currentDate = new Date();
        const expirationDate = new Date(
          currentDate.getTime() + 30 * 24 * 60 * 60 * 1000,
        );
        cookies.set(CookieKeys.REFRESH_TOKEN, refreshToken, {
          httpOnly: true,
          sameSite: 'lax',
          secure: false,
          expires: expirationDate,
        });
      }

      return refreshToken;
    });
  }

  public async clearRefreshToken(refreshToken: string): Promise<void> {
    const { payload } = await this.checkRefreshToken(refreshToken);

    if (payload) {
      await this.databaseService.userRefreshToken.delete({
        where: {
          id: payload.tokenId,
        },
      });
    }
  }

  public async clearRefreshTokenWithCookie(
    req: Request,
    res: Response,
  ): Promise<void> {
    const cookies = new Cookies(req, res);
    const refreshToken = cookies.get(CookieKeys.REFRESH_TOKEN);

    if (refreshToken) {
      await this.databaseService.userRefreshToken.delete({
        where: {
          tokenHash: await Utils.hashString(refreshToken),
        },
      });

      cookies.set(CookieKeys.REFRESH_TOKEN, undefined);
    }
  }

  public async generateAccessToken(userId: string): Promise<string> {
    const userRoles = await this.baseUserService.getUserRolesList(userId);
    const accessToken = await this.jwtService.signAsync(
      {
        userId,
        userRoles,
      },
      {
        secret: this.configService.getOrThrow<string>(
          'USER_JWT_ACCESS_TOKEN_SECRET',
        ),
        expiresIn: '1min',
      },
    );

    return accessToken;
  }

  public async checkRefreshTokenCookie(req: Request, res: Response) {
    const cookies = new Cookies(req, res);
    const refreshToken = cookies.get(CookieKeys.REFRESH_TOKEN);
    let valid = true;
    let payload: UserRefreshTokenPayload | undefined;
    if (refreshToken) {
      try {
        payload = await this.jwtService.verifyAsync<UserRefreshTokenPayload>(
          refreshToken,
          {
            secret: this.configService.getOrThrow<string>(
              'USER_JWT_REFRESH_TOKEN_SECRET',
            ),
          },
        );
      } catch (error) {
        valid = false;
      }
    }

    return {
      refreshToken,
      payload,
      valid,
    };
  }

  public async checkRefreshToken(refreshToken: string) {
    let valid = true;
    let payload: UserRefreshTokenPayload | undefined;
    if (refreshToken) {
      try {
        payload = await this.jwtService.verifyAsync<UserRefreshTokenPayload>(
          refreshToken,
          {
            secret: this.configService.getOrThrow<string>(
              'USER_JWT_REFRESH_TOKEN_SECRET',
            ),
          },
        );
      } catch (error) {
        valid = false;
      }
    }

    return {
      payload,
      valid,
    };
  }

  public async checkAccessToken(accessToken: string) {
    let valid = true;
    let payload: UserAccessTokenPayload | undefined;
    if (accessToken) {
      try {
        payload = await this.jwtService.verifyAsync<UserAccessTokenPayload>(
          accessToken,
          {
            secret: this.configService.getOrThrow<string>(
              'USER_JWT_ACCESS_TOKEN_SECRET',
            ),
          },
        );
      } catch (error) {
        valid = false;
      }
    }

    return {
      payload,
      valid,
    };
  }

  public async getGoogleProfileData(token: string) {
    const googleOAuth2Client = new google.auth.OAuth2({
      clientId: this.configService.getOrThrow<string>('GOOGLE_OAUTH_CLIENT_ID'),
      clientSecret: this.configService.getOrThrow<string>(
        'GOOGLE_OAUTH_CLIENT_SECRET',
      ),
    });
    googleOAuth2Client.setCredentials({
      access_token: token,
    });
    const oAuth2Service = google.oauth2({
      version: 'v2',
      auth: googleOAuth2Client,
    });
    const response = await oAuth2Service.userinfo.get({});

    return response.data;
  }
}
