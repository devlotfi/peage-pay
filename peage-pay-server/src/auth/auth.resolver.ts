import {
  Args,
  Context,
  GraphQLExecutionContext,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignUpWithEmailInput } from './input/sign-up-with-email.input';
import { VerifyEmailInput } from './input/verify-email.input';
import { SignUpWithPhoneInput } from './input/sign-up-with-phone.input';
import { SigninWithEmailInput } from './input/sign-in-with-email.input';
import { RefreshTokenMode } from './graphql/refresh-token-mode.graphql';
import { SignInWithEmailResult } from './result/sign-in-with-email.result';
import { SignInWithRefreshTokenResult } from './result/sign-in-with-refresh-token.result';
import { SignInWithRefreshTokenInput } from './input/sign-in-with-refresh-token.input';

@Resolver()
export class AuthResolver {
  public constructor(private readonly authService: AuthService) {}

  @Query(() => String)
  public lol() {
    return 'test';
  }

  @Mutation(() => Boolean)
  public async signUpWithEmail(
    @Args('signUpWithEmailInput') signUpWithEmailInput: SignUpWithEmailInput,
  ): Promise<boolean> {
    return await this.authService.signUpWithEmail(signUpWithEmailInput);
  }

  @Mutation(() => Boolean)
  public async verifyEmail(
    @Args('verifyEmailInput') verifyEmailInput: VerifyEmailInput,
  ): Promise<boolean> {
    return await this.authService.verifyEmail(verifyEmailInput);
  }

  @Mutation(() => Boolean)
  public async signUpWithPhone(
    @Args('signUpWithPhoneInput') signUpWithPhoneInput: SignUpWithPhoneInput,
  ): Promise<boolean> {
    return await this.authService.signUpWithPhone(signUpWithPhoneInput);
  }

  @Mutation(() => SignInWithEmailResult)
  public async signInWithEmail(
    @Args('signInWithEmailInput') signInWithEmailInput: SigninWithEmailInput,
    @Args('refreshTokenMode', { type: () => RefreshTokenMode })
    refreshTokenMode: RefreshTokenMode,
    @Context() context: GraphQLExecutionContext,
  ): Promise<SignInWithEmailResult> {
    return await this.authService.signInWithEmail(
      signInWithEmailInput,
      refreshTokenMode,
      context,
    );
  }

  @Mutation(() => SignInWithRefreshTokenResult)
  public async signInWithRefreshToken(
    @Args('signInWithRefreshTokenInput')
    signInWithRefreshTokenInput: SignInWithRefreshTokenInput,
  ): Promise<SignInWithRefreshTokenResult> {
    return await this.authService.signInWithRefreshToken(
      signInWithRefreshTokenInput,
    );
  }

  @Mutation(() => SignInWithRefreshTokenResult)
  public async signInWithRefreshTokenCookie(
    @Context()
    context: GraphQLExecutionContext,
  ): Promise<SignInWithRefreshTokenResult> {
    return await this.authService.signInWithRefreshTokenCookie(context);
  }
}
