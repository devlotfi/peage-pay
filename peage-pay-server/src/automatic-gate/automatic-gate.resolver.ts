import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AutomaticGateService } from './automatic-gate.service';
import { AutomaticGateListResult } from './result/automatic-gate-list.result.gql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { BaseUserRolesType } from 'src/user/graphql/base-user-roles.gql';
import { AutomaticGateListInput } from './input/automatic-gate-list.input.gql';
import { ContextAccessTokenPayload } from 'src/shared/decorators/context-access-token-payload.decorator';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { AutomaticGateType } from './graphql/automatic-gate.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';
import { AddAutomaticGateInput } from './input/add-automatic-gate.input.gql';
import { EditAutomaticGateInput } from './input/edit-automatic-gate.input.gql';
import { SignInAutomaticGateInput } from './input/sign-in-automatic-gate.input.gql';
import { SignInAutomaticGateResult } from './result/sign-in-automatic-gate.result.gql';
import { AutomaticGateAuthGuard } from 'src/shared/guards/automatic-gate-auth.guard';
import { AutomaticGateAccessTokenPayload } from './types/automatic-gate-access-token-payload.type';
import { SignInAutomaticGateRefreshTokenInput } from './input/sign-in-automatic-gate-refresh-token.input.gql';
import { TollType } from 'src/toll/graphql/toll.gql';
import { TollService } from 'src/toll/toll.service';

@Resolver(() => AutomaticGateType)
export class AutomaticGateResolver {
  public constructor(
    private readonly automaticGateService: AutomaticGateService,
    private readonly tollService: TollService,
  ) {}

  @Query(() => AutomaticGateListResult)
  public async automaticGateList(
    @Args('automaticGateListInput')
    automaticGateListInput: AutomaticGateListInput,
  ) {
    return await this.automaticGateService.automaticGateList(
      automaticGateListInput,
    );
  }

  @Query(() => AutomaticGateType, { nullable: true })
  public async automaticGateById(
    @Args('automaticGateByIdInput') automaticGateByIdInput: IdInput,
  ) {
    return await this.automaticGateService.automaticGateById(
      automaticGateByIdInput,
    );
  }

  @Mutation(() => AutomaticGateType)
  @AllowRoles([BaseUserRolesType.TOLL_ADMIN])
  @UseGuards(AuthGuard)
  public async addAutomaticGate(
    @Args('addAutomaticGateInput') addAutomaticGateInput: AddAutomaticGateInput,
    @ContextAccessTokenPayload() accessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.automaticGateService.addAutomaticGate(
      addAutomaticGateInput,
      accessTokenPayload,
    );
  }

  @Mutation(() => AutomaticGateType)
  @AllowRoles([BaseUserRolesType.TOLL_ADMIN])
  @UseGuards(AuthGuard)
  public async editAutomaticGate(
    @Args('editAutomaticGateInput')
    editAutomaticGateInput: EditAutomaticGateInput,
    @ContextAccessTokenPayload() accessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.automaticGateService.editAutomaticGate(
      editAutomaticGateInput,
      accessTokenPayload,
    );
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async deleteAutomaticGate(
    @Args('deleteAutomaticGateInput') deleteAutomaticGateInput: IdInput,
    @ContextAccessTokenPayload() accessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.automaticGateService.deleteAutomaticGate(
      deleteAutomaticGateInput,
      accessTokenPayload,
    );
  }

  @Mutation(() => SignInAutomaticGateResult)
  public async signInAutomaticGate(
    @Args('signInAutomaticGateInput')
    signInAutomaticGateInput: SignInAutomaticGateInput,
  ) {
    return await this.automaticGateService.signInAutomaticGate(
      signInAutomaticGateInput,
    );
  }

  @Query(() => SignInAutomaticGateResult)
  public async signInAutomaticGateRefreshToken(
    @Args('signInAutomaticGateRefreshTokenInput')
    signInAutomaticGateRefreshTokenInput: SignInAutomaticGateRefreshTokenInput,
  ) {
    return await this.automaticGateService.signInAutomaticGateRefreshToken(
      signInAutomaticGateRefreshTokenInput,
    );
  }

  @Mutation(() => Boolean)
  @UseGuards(AutomaticGateAuthGuard)
  public async signOutAutomaticGate(
    @ContextAccessTokenPayload()
    accessTokenPayload: AutomaticGateAccessTokenPayload,
  ) {
    return await this.automaticGateService.signOutAutomaticGate(
      accessTokenPayload,
    );
  }

  @ResolveField(() => TollType)
  public async toll(@Parent() automaticGate: AutomaticGateType) {
    return await this.tollService.tollById({ id: automaticGate.tollId });
  }
}
