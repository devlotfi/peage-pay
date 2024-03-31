import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { GraphQLError } from 'graphql';
import { TokenService } from 'src/token/token.service';
import { SignInWithRefreshTokenResult } from './result/sign-in-with-refresh-token.result.gql';
import { SignInWithRefreshTokenInput } from './input/sign-in-with-refresh-token.input.gql';
import { AccessTokenPayload } from './types/access-token-payload.type';
import { Request, Response } from 'express';
import { RefreshTokenMode } from './graphql/refresh-token-mode.gql';
import { BaseUserService } from 'src/user/base-user.service';
import { TokenErrors } from 'src/token/graphql/token-errors.gql';
import { PrismaErrors } from 'src/shared/graphql/prisma-errors.gql';

@Injectable()
export class TokenAuthService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly baseUserService: BaseUserService,
    private readonly tokenService: TokenService,
  ) {}

  public async signInWithRefreshToken(
    signInWithRefreshTokenInput: SignInWithRefreshTokenInput,
  ): Promise<SignInWithRefreshTokenResult> {
    const { payload, valid } = await this.tokenService.checkRefreshToken(
      signInWithRefreshTokenInput.refreshToken,
    );
    if (!valid || !payload) {
      throw new GraphQLError(TokenErrors.INVALID_REFRESH_TOKEN);
    }

    console.log(payload);
    const userId: string = payload.userId;
    const baseUser = await this.databaseService.baseUser.findUnique({
      where: {
        id: userId,
      },
    });
    if (!baseUser) {
      throw new GraphQLError(PrismaErrors.NOT_FOUND);
    }

    const accessToken = await this.tokenService.generateAccessToken(userId);
    const roles = await this.baseUserService.getUserRolesList(userId);
    const signInWithRefreshTokenResult = new SignInWithRefreshTokenResult(
      baseUser as any,
      accessToken,
      roles,
    );

    return signInWithRefreshTokenResult;
  }

  public async signInWithRefreshTokenCookie(
    req: Request,
    res: Response,
  ): Promise<SignInWithRefreshTokenResult> {
    const { payload, valid, refreshToken } =
      await this.tokenService.checkRefreshTokenCookie(req, res);
    if (!refreshToken) {
      throw new GraphQLError(TokenErrors.REFRESH_TOKEN_NOT_PROVIDED);
    }
    if (!valid || !payload) {
      throw new GraphQLError(TokenErrors.INVALID_REFRESH_TOKEN);
    }

    console.log(payload);
    const userId: string = payload.userId;
    const baseUser = await this.databaseService.baseUser.findUnique({
      where: {
        id: userId,
      },
    });
    if (!baseUser) {
      throw new GraphQLError(PrismaErrors.NOT_FOUND);
    }

    const accessToken = await this.tokenService.generateAccessToken(userId);
    const roles = await this.baseUserService.getUserRolesList(userId);
    const signInWithRefreshTokenResult = new SignInWithRefreshTokenResult(
      baseUser as any,
      accessToken,
      roles,
    );

    return signInWithRefreshTokenResult;
  }

  public async signOut(
    accessTokenPayload: AccessTokenPayload,
  ): Promise<boolean> {
    await this.tokenService.clearRefreshToken(
      accessTokenPayload.userId,
      RefreshTokenMode.COOKIE,
    );
    return true;
  }

  public async signOutWithRefreshTokenCookie(
    accessTokenPayload: AccessTokenPayload,
    req: Request,
    res: Response,
  ): Promise<boolean> {
    await this.tokenService.clearRefreshToken(
      accessTokenPayload.userId,
      RefreshTokenMode.COOKIE,
      req,
      res,
    );
    return true;
  }
}
