import { Injectable } from '@nestjs/common';
import { SignInResult } from './result/sign-in.result.gql';
import { SignInWithGoogleInput } from './input/sign-in-with-google.input.gql';
import { TokenService } from 'src/token/token.service';
import { GraphQLError } from 'graphql';
import { DatabaseService } from 'src/database/database.service';
import { RefreshTokenMode } from './graphql/refresh-token-mode.gql';
import { Request, Response } from 'express';
import { BaseUserService } from 'src/user/base-user.service';
import { TokenErrors } from 'src/token/graphql/token-errors.gql';

@Injectable()
export class GoogleAuthService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly baseUserService: BaseUserService,
    private readonly tokenService: TokenService,
  ) {}

  public async singInWithGoogle(
    signInWithGoogleInput: SignInWithGoogleInput,
    refreshTokenMode: RefreshTokenMode,
    req: Request,
    res: Response,
  ): Promise<SignInResult> {
    try {
      const googleProfile = await this.tokenService.getGoogleProfileData(
        signInWithGoogleInput.token,
      );

      let googleAuthMethod =
        await this.databaseService.googleAuthMethod.findUnique({
          where: {
            googleId: `${googleProfile.id}`,
          },
          include: {
            authMethod: {
              include: {
                baseUser: true,
              },
            },
          },
        });

      if (!googleAuthMethod) {
        await this.databaseService.baseUser.create({
          data: {
            firstName: googleProfile.given_name || '',
            lastName: googleProfile.family_name || '',
            user: {
              create: {},
            },
            authMethod: {
              create: {
                googleAuthMethod: {
                  create: {
                    email: googleProfile.email || '',
                    googleId: googleProfile.id || '',
                  },
                },
              },
            },
          },
          include: {
            authMethod: {
              include: {
                googleAuthMethod: true,
              },
            },
          },
        });
      }

      googleAuthMethod =
        (await this.databaseService.googleAuthMethod.findUnique({
          where: {
            googleId: `${googleProfile.id}`,
          },
          include: {
            authMethod: {
              include: {
                baseUser: true,
              },
            },
          },
        }))!;
      const refreshToken = await this.tokenService.generateRefreshToken(
        googleAuthMethod.authMethod.userId,
        req,
        res,
        refreshTokenMode,
      );
      const accessToken = await this.tokenService.generateAccessToken(
        googleAuthMethod.authMethod.userId,
      );
      const roles = await this.baseUserService.getUserRolesList(
        googleAuthMethod.authMethod.userId,
      );
      const signInResult = new SignInResult(
        googleAuthMethod.authMethod.baseUser as any,
        accessToken,
        roles,
        refreshTokenMode === RefreshTokenMode.PLAIN_TEXT
          ? refreshToken
          : undefined,
      );

      return signInResult;
    } catch (error) {
      throw new GraphQLError(TokenErrors.INVALID_GOOGLE_OAUTH_TOKEN);
    }
  }
}
