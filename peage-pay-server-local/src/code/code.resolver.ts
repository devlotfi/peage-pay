import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CodeService } from './code.service';
import { RedeemCodeInput } from './input/redeem-code.input.gql';
import { ContextAccessTokenPayload } from 'src/shared/decorators/context-access-token-payload.decorator';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { BaseUserRolesType } from 'src/user/graphql/base-user-roles.gql';

@Resolver()
export class CodeResolver {
  public constructor(private readonly codeService: CodeService) {}

  @Mutation(() => [String])
  public async generateCodes() {
    return await this.codeService.generateCodes();
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.USER])
  @UseGuards(AuthGuard)
  public async redeemCode(
    @Args('redeemCodeInput') redeemCodeInput: RedeemCodeInput,
    @ContextAccessTokenPayload() userAccessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.codeService.redeemCode(
      redeemCodeInput,
      userAccessTokenPayload,
    );
  }
}
