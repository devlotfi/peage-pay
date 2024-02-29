import {
  Args,
  Context,
  GraphQLExecutionContext,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { SignUpWithEmailInput } from './input/sign-up-with-email.input';
import { VerifyEmailInput } from './input/verify-email.input';
import { SigninWithEmailInput } from './input/sign-in-with-email.input';
import { RefreshTokenMode } from './graphql/refresh-token-mode.graphql';
import { SignInWithEmailResult } from './result/sign-in-with-email.result';
import { SignInWithRefreshTokenResult } from './result/sign-in-with-refresh-token.result';
import { SignInWithRefreshTokenInput } from './input/sign-in-with-refresh-token.input';
import { EmailAuthService } from './email-auth.service';
import { GoogleAuthService } from './google-auth.service';
import { PhoneAuthService } from './phone-auth.service';
import { TokenAuthService } from './token-auth.service';
import { SendResetPasswordEmailInput } from './input/send-reset-password-email.input';
import { ResetPasswordInput } from './input/reset-password.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { AllowRoles } from 'src/decorators/allow-roles.decorator';
import { UserRolesType } from 'src/user/graphql/user-roles.graphql';

@Resolver()
export class AuthResolver {
  public constructor(
    private readonly emailAuthService: EmailAuthService,
    private readonly googleAuthService: GoogleAuthService,
    private readonly phoneAuthService: PhoneAuthService,
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

  @Mutation(() => SignInWithEmailResult)
  public async signInWithEmail(
    @Args('signInWithEmailInput') signInWithEmailInput: SigninWithEmailInput,
    @Args('refreshTokenMode', { type: () => RefreshTokenMode })
    refreshTokenMode: RefreshTokenMode,
    @Context() context: GraphQLExecutionContext,
  ): Promise<SignInWithEmailResult> {
    return await this.emailAuthService.signInWithEmail(
      signInWithEmailInput,
      refreshTokenMode,
      context,
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
    @Context()
    context: GraphQLExecutionContext,
  ): Promise<SignInWithRefreshTokenResult> {
    return await this.tokenAuthService.signInWithRefreshTokenCookie(context);
  }

  @Mutation(() => Boolean)
  @UseGuards(AuthGuard)
  @AllowRoles([UserRolesType.GENERAL_ADMIN])
  public async signOut(): Promise<boolean> {
    return await this.tokenAuthService.signOut();
  }
}
