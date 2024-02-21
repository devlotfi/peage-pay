import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignUpWithEmailInput } from './input/sign-up-with-email.input';

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
}
