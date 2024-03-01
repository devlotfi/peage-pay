import { Injectable } from '@nestjs/common';
import { SignInResult } from './result/sign-in.result';
import { SignInWithGoogleInput } from './input/sign-in-with-google.input';
import { TokenService } from 'src/token/token.service';
import { GraphQLError } from 'graphql';
import { AuthErrors } from './graphql/auth-errors.graphql';
import { DatabaseService } from 'src/database/database.service';
import { RefreshTokenMode } from './graphql/refresh-token-mode.graphql';
import { Request, Response } from 'express';
import { BaseUserType } from 'src/user/graphql/base-user.graphql';

@Injectable()
export class GoogleAuthService {
  public constructor(
    private readonly databaseService: DatabaseService,
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
        await this.databaseService.googleAuthMethod.findFirst({
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

      googleAuthMethod = (await this.databaseService.googleAuthMethod.findFirst(
        {
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
        },
      ))!;
      const refreshToken = await this.tokenService.generateRefreshToken(
        googleAuthMethod.authMethod.userId,
        req,
        res,
        refreshTokenMode,
      );
      const accessToken = await this.tokenService.generateAccessToken(
        googleAuthMethod.authMethod.userId,
      );
      const signInResult = new SignInResult();
      signInResult.baseUser = googleAuthMethod.authMethod
        .baseUser as BaseUserType;
      signInResult.accessToken = accessToken;
      if (refreshTokenMode === RefreshTokenMode.PLAIN_TEXT) {
        signInResult.refreshToken = refreshToken;
      }

      return signInResult;
    } catch (error) {
      throw new GraphQLError(AuthErrors.INVALID_GOOGLE_OAUTH_TOKEN);
    }
  }
}
