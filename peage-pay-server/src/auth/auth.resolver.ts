import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SignUpWithEmailInput } from './input/sign-up-with-email.input.gql';
import { VerifyEmailInput } from './input/verify-email.input.gql';
import { SigninWithEmailInput } from './input/sign-in-with-email.input.gql';
import { RefreshTokenMode } from './graphql/refresh-token-mode.gql';
import { SignInResult } from './result/sign-in.result.gql';
import { SignInWithRefreshTokenResult } from './result/sign-in-with-refresh-token.result.gql';
import { SignInWithRefreshTokenInput } from './input/sign-in-with-refresh-token.input.gql';
import { EmailAuthService } from './email-auth.service';
import { GoogleAuthService } from './google-auth.service';
import { TokenAuthService } from './token-auth.service';
import { SendResetPasswordEmailInput } from './input/send-reset-password-email.input.gql';
import { ResetPasswordInput } from './input/reset-password.input.gql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { GraphqlRequest } from 'src/shared/decorators/graphql-request.decorator';
import { Request, Response } from 'express';
import { GraphqlResponse } from 'src/shared/decorators/graphql-response.decorator';
import { ContextAccessTokenPayload } from 'src/shared/decorators/context-access-token-payload.decorator';
import { AccessTokenPayload } from './types/access-token-payload.type';
import { SignInWithGoogleInput } from './input/sign-in-with-google.input.gql';

@Resolver()
export class AuthResolver {
  public constructor(
    private readonly emailAuthService: EmailAuthService,
    private readonly googleAuthService: GoogleAuthService,
    private readonly tokenAuthService: TokenAuthService,
  ) {}

  @Query(() => String)
  public lol() {
    return 'test';
  }

  @Mutation(() => Boolean)
  public async signUpWithEmail(
    @Args('signUpWithEmailInput') signUpWithEmailInput: SignUpWithEmailInput,
  ): Promise<boolean> {
    return await this.emailAuthService.signUpWithEmail(signUpWithEmailInput);
  }

  @Mutation(() => Boolean)
  public async verifyEmail(
    @Args('verifyEmailInput') verifyEmailInput: VerifyEmailInput,
  ): Promise<boolean> {
    return await this.emailAuthService.verifyEmail(verifyEmailInput);
  }

  @Mutation(() => Boolean)
  public async sendPasswordResetEmail(
    @Args('sendPasswordResetEmailInput')
    sendPasswordResetEmailInput: SendResetPasswordEmailInput,
  ): Promise<boolean> {
    return await this.emailAuthService.sendPasswordResetEmail(
      sendPasswordResetEmailInput,
    );
  }

  @Mutation(() => Boolean)
  public async resetPassword(
    @Args('resetPasswordInput')
    resetPasswordInput: ResetPasswordInput,
  ): Promise<boolean> {
    return await this.emailAuthService.resetPassword(resetPasswordInput);
  }

  @Mutation(() => SignInResult)
  public async signInWithEmail(
    @Args('signInWithEmailInput') signInWithEmailInput: SigninWithEmailInput,
    @Args('refreshTokenMode', { type: () => RefreshTokenMode })
    refreshTokenMode: RefreshTokenMode,
    @GraphqlRequest() req: Request,
    @GraphqlResponse() res: Response,
  ): Promise<SignInResult> {
    return await this.emailAuthService.signInWithEmail(
      signInWithEmailInput,
      refreshTokenMode,
      req,
      res,
    );
  }

  @Query(() => SignInWithRefreshTokenResult)
  public async signInWithRefreshToken(
    @Args('signInWithRefreshTokenInput')
    signInWithRefreshTokenInput: SignInWithRefreshTokenInput,
  ): Promise<SignInWithRefreshTokenResult> {
    return await this.tokenAuthService.signInWithRefreshToken(
      signInWithRefreshTokenInput,
    );
  }

  @Query(() => SignInWithRefreshTokenResult)
  public async signInWithRefreshTokenCookie(
    @GraphqlRequest() req: Request,
    @GraphqlResponse() res: Response,
  ): Promise<SignInWithRefreshTokenResult> {
    return await this.tokenAuthService.signInWithRefreshTokenCookie(req, res);
  }

  @Mutation(() => Boolean)
  @UseGuards(AuthGuard)
  public async signOut(
    @ContextAccessTokenPayload() accessTokenPayload: AccessTokenPayload,
  ): Promise<boolean> {
    return await this.tokenAuthService.signOut(accessTokenPayload);
  }

  @Mutation(() => Boolean)
  @UseGuards(AuthGuard)
  public async signOutWithRefreshTokenCookie(
    @ContextAccessTokenPayload() accessTokenPayload: AccessTokenPayload,
    @GraphqlRequest() req: Request,
    @GraphqlResponse() res: Response,
  ): Promise<boolean> {
    return await this.tokenAuthService.signOutWithRefreshTokenCookie(
      accessTokenPayload,
      req,
      res,
    );
  }

  @Mutation(() => SignInResult)
  public async signInWithGoogle(
    @Args('signInWithGoogleInput')
    signInWithGoogleInput: SignInWithGoogleInput,
    @Args('refreshTokenMode', { type: () => RefreshTokenMode })
    refreshTokenMode: RefreshTokenMode,
    @GraphqlRequest() req: Request,
    @GraphqlResponse() res: Response,
  ): Promise<SignInResult> {
    return await this.googleAuthService.singInWithGoogle(
      signInWithGoogleInput,
      refreshTokenMode,
      req,
      res,
    );
  }
}
