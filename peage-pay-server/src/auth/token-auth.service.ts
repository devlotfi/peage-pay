import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { GraphQLError } from 'graphql';
import { AuthErrors } from './graphql/auth-errors.graphql';
import { BaseUserType } from 'src/user/graphql/base-user.graphql';
import { GraphQLExecutionContext } from '@nestjs/graphql';
import { TokenService } from 'src/token/token.service';
import { SignInWithRefreshTokenResult } from './result/sign-in-with-refresh-token.result';
import { SignInWithRefreshTokenInput } from './input/sign-in-with-refresh-token.input';

@Injectable()
export class TokenAuthService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly tokenService: TokenService,
  ) {}

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
