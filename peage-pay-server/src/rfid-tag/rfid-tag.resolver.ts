import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { RfidTagService } from './rfid-tag.service';
import { RfidTagListResult } from './result/rfid-tag-list.result.gql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { RfidTagListInput } from './input/rfid-tag-list.input.gql';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { BaseUserRolesType } from 'src/user/graphql/base-user-roles.gql';
import { RfidTagType } from './graphql/rfid-tag.gql';
import { AddRfidTagInput } from './input/add-rfid-tag.input.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';
import { BaseUserType } from 'src/user/graphql/base-user.gql';
import { RfidTagByRfidInput } from './input/rfid-tag-by-rfid.input.gql';
import { BaseUserService } from 'src/user/base-user.service';

@Resolver(() => RfidTagType)
export class RfidTagResolver {
  public constructor(
    private readonly rfidTagService: RfidTagService,
    private readonly baseUserService: BaseUserService,
  ) {}

  @Query(() => RfidTagListResult)
  @AllowRoles([BaseUserRolesType.MODERATOR])
  @UseGuards(AuthGuard)
  public async rfidTagList(
    @Args('rfidTagListInput') rfidTagListInput: RfidTagListInput,
  ) {
    return await this.rfidTagService.rfidTagList(rfidTagListInput);
  }

  @Query(() => RfidTagType, { nullable: true })
  @AllowRoles([BaseUserRolesType.MODERATOR])
  @UseGuards(AuthGuard)
  public async rfidTagByRfid(
    @Args('rfidTagByRfidInput') rfidTagByRfidInput: RfidTagByRfidInput,
  ) {
    return await this.rfidTagService.rfidTagByRfid(rfidTagByRfidInput);
  }

  @Mutation(() => RfidTagType)
  @AllowRoles([BaseUserRolesType.MODERATOR])
  @UseGuards(AuthGuard)
  public async addRfidTag(
    @Args('addRfidTagInput') addRfidTagInput: AddRfidTagInput,
  ) {
    return await this.rfidTagService.addRfidTag(addRfidTagInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.MODERATOR])
  @UseGuards(AuthGuard)
  public async deleteRfidTag(
    @Args('deleteRfidTagInput') deleteRfidTagInput: IdInput,
  ) {
    return await this.rfidTagService.deleteRfidTag(deleteRfidTagInput);
  }

  @ResolveField(() => BaseUserType)
  public async baseUser(@Parent() rfidTag: RfidTagType) {
    return await this.baseUserService.baseUserById({ id: rfidTag.baseUserId });
  }
}
