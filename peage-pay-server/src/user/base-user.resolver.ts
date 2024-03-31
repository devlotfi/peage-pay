import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { BaseUserService } from './base-user.service';
import { BaseUserRolesType } from './graphql/base-user-roles.gql';
import { BaseUserType } from './graphql/base-user.gql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { BaseUserListInput } from './input/base-user-list.input.gql';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { BaseUserListResult } from './result/base-user-list.result.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';

@Resolver(() => BaseUserType)
export class BaseUserResolver {
  public constructor(private readonly baseUserService: BaseUserService) {}

  @Query(() => BaseUserListResult)
  @AllowRoles([
    BaseUserRolesType.GENERAL_ADMIN,
    BaseUserRolesType.HUMAN_RESSOURCES_ADMIN,
    BaseUserRolesType.MODERATOR,
  ])
  @UseGuards(AuthGuard)
  public async baseUserList(
    @Args('baseUserListInput') baseUserListInput: BaseUserListInput,
  ): Promise<BaseUserListResult> {
    return await this.baseUserService.baseUserList(baseUserListInput);
  }

  @Query(() => BaseUserType, { nullable: true })
  @AllowRoles([
    BaseUserRolesType.GENERAL_ADMIN,
    BaseUserRolesType.HUMAN_RESSOURCES_ADMIN,
    BaseUserRolesType.MODERATOR,
  ])
  @UseGuards(AuthGuard)
  public async baseUserById(
    @Args('baseUserByIdInput') baseUserByIdInput: IdInput,
  ): Promise<BaseUserType | null> {
    return (await this.baseUserService.baseUserById(baseUserByIdInput)) as any;
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.MODERATOR])
  @UseGuards(AuthGuard)
  public async deleteBaseUser(
    @Args('deleteBaseUserInput') deleteBaseUserInput: IdInput,
  ): Promise<boolean> {
    return (await this.baseUserService.deleteBaseUser(
      deleteBaseUserInput,
    )) as any;
  }

  @ResolveField(() => [BaseUserRolesType])
  public async roles(
    @Parent() baseUser: BaseUserType,
  ): Promise<BaseUserRolesType[]> {
    return this.baseUserService.getUserRolesList(baseUser.id);
  }
}
