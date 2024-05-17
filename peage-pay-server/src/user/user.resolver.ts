import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { BaseUserRolesType } from './graphql/base-user-roles.gql';
import { BaseUserType } from './graphql/base-user.gql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { UserService } from './user.service';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { ContextAccessTokenPayload } from 'src/shared/decorators/context-access-token-payload.decorator';
import { BaseUserService } from './base-user.service';
import { UserType } from './graphql/user.gql';

@Resolver(() => UserType)
export class UserResolver {
  public constructor(
    private readonly userService: UserService,
    private readonly baseUserService: BaseUserService,
  ) {}

  @Query(() => UserType)
  @AllowRoles([BaseUserRolesType.USER])
  @UseGuards(AuthGuard)
  public async userInfo(
    @ContextAccessTokenPayload() userAccessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.userService.userInfo(userAccessTokenPayload);
  }

  @Query(() => String)
  @AllowRoles([BaseUserRolesType.USER])
  @UseGuards(AuthGuard)
  public async generatePin(
    @ContextAccessTokenPayload() userAccessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.userService.generatePin(userAccessTokenPayload);
  }

  @ResolveField(() => BaseUserType)
  public async baseUser(@Parent() user: UserType) {
    return await this.baseUserService.baseUser(user.baseUserId);
  }
}
