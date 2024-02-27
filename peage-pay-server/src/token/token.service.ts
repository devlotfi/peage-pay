import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { randomBytes } from 'crypto';
import { Request, Response } from 'express';
import * as Cookies from 'cookies';
import { CookieKeys } from 'src/constants/cookie-keys';
import { RefreshTokenMode } from 'src/auth/graphql/refresh-token-mode.graphql';
import { DatabaseService } from 'src/database/database.service';
import { Utils } from 'src/utils';
import { UserService } from 'src/user/user.service';
import { Env } from 'src/config/env.type';

@Injectable()
export class TokenService {
  public constructor(
    private readonly configService: ConfigService<Env>,
    private readonly databaseService: DatabaseService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public generateVerificationUrl(userId: string) {
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

  public generatePasswordResetUrl(userId: string) {
    const tokenLength = 128;
    const size = Math.floor(tokenLength / 2);
    const token = randomBytes(size).toString('hex');
    const webClientUrl =
      this.configService.getOrThrow<string>('WEB_CLIENT_URL');
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
    const refreshToken = await this.jwtService.signAsync(
      { userId },
      {
        expiresIn: '30d',
        secret: this.configService.getOrThrow<string>(
          'JWT_REFRESH_TOKEN_SECRET',
        ),
      },
    );

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);

    await this.databaseService.$transaction(async (prisma) => {
      await prisma.refreshToken.deleteMany({
        where: {
          baseUser: {
            id: userId,
          },
        },
      });
      await prisma.refreshToken.create({
        data: {
          tokenHash: await Utils.hashString(refreshToken),
          expiresAt: expirationDate,
          baseUser: {
            connect: {
              id: userId,
            },
          },
        },
      });
    });

    if (refreshTokenMode === RefreshTokenMode.COOKIE) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const cookies = new Cookies(req, res);
      cookies.set(CookieKeys.REFRESH_TOKEN, refreshToken, {
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
      });
    }

    return refreshToken;
  }

  public async generateAccessToken(userId: string): Promise<string> {
    const userRoles = await this.userService.getUserRolesList(userId);
    const accessToken = await this.jwtService.signAsync(
      {
        userId,
        userRoles,
      },
      {
        secret: this.configService.getOrThrow<string>(
          'JWT_ACCESS_TOKEN_SECRET',
        ),
        expiresIn: '5min',
      },
    );

    return accessToken;
  }

  public async checkRefreshTokenCookie(req: Request, res: Response) {
    const cookies = new Cookies(req, res);
    const refreshToken = cookies.get(CookieKeys.REFRESH_TOKEN);
    let valid = true;
    let payload;
    if (refreshToken) {
      try {
        payload = await this.jwtService.verifyAsync(refreshToken, {
          secret: this.configService.getOrThrow<string>(
            'JWT_REFRESH_TOKEN_SECRET',
          ),
        });
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
    let payload;
    if (refreshToken) {
      try {
        payload = await this.jwtService.verifyAsync(refreshToken, {
          secret: this.configService.getOrThrow<string>(
            'JWT_REFRESH_TOKEN_SECRET',
          ),
        });
      } catch (error) {
        valid = false;
      }
    }

    return {
      payload,
      valid,
    };
  }
}
