import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { GraphQLError } from 'graphql';
import { UserTokenService } from 'src/token/user-token.service';
import { SignInWithRefreshTokenResult } from './result/sign-in-with-refresh-token.result.gql';
import { SignInWithRefreshTokenInput } from './input/sign-in-with-refresh-token.input.gql';
import { Request, Response } from 'express';
import { BaseUserService } from 'src/user/base-user.service';
import { TokenErrors } from 'src/token/graphql/token-errors.gql';
import { SignOutInput } from './input/sign-out.input.gql';

@Injectable()
export class TokenAuthService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly baseUserService: BaseUserService,
    private readonly userTokenService: UserTokenService,
  ) {}

  public async signInWithRefreshToken(
    signInWithRefreshTokenInput: SignInWithRefreshTokenInput,
  ): Promise<SignInWithRefreshTokenResult> {
    const { payload, valid } = await this.userTokenService.checkRefreshToken(
      signInWithRefreshTokenInput.refreshToken,
    );
    if (!valid || !payload) {
      throw new GraphQLError(TokenErrors.INVALID_REFRESH_TOKEN);
    }

    console.log(payload);
    const userId: string = payload.userId;
    const baseUser = await this.databaseService.baseUser.findUniqueOrThrow({
      where: {
        id: userId,
      },
    });

    const accessToken = await this.userTokenService.generateAccessToken(userId);
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
      await this.userTokenService.checkRefreshTokenCookie(req, res);
    if (!refreshToken) {
      throw new GraphQLError(TokenErrors.REFRESH_TOKEN_NOT_PROVIDED);
    }
    if (!valid || !payload) {
      throw new GraphQLError(TokenErrors.INVALID_REFRESH_TOKEN);
    }

    const userId: string = payload.userId;
    const baseUser = await this.databaseService.baseUser.findUniqueOrThrow({
      where: {
        id: userId,
      },
    });

    const accessToken = await this.userTokenService.generateAccessToken(userId);
    const roles = await this.baseUserService.getUserRolesList(userId);

    return {
      accessToken,
      roles,
      baseUser: baseUser as any,
    };
  }

  public async signOut(signOutinput: SignOutInput): Promise<boolean> {
    await this.userTokenService.clearRefreshToken(signOutinput.refreshToken);
    return true;
  }

  public async signOutWithRefreshTokenCookie(
    req: Request,
    res: Response,
  ): Promise<boolean> {
    await this.userTokenService.clearRefreshTokenWithCookie(req, res);
    return true;
  }
}
