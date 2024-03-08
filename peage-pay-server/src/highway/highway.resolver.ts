import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { HighwayService } from './highway.service';
import { AddHighwayInput } from './input/add-highway.input';
import { HighwayType } from './graphql/highway.graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { BaseUserRolesType } from 'src/base-user/graphql/base-user-roles.graphql';
import { EditHighwayInput } from './input/edit-highway.input';
import { DeleteHighwayInput } from './input/delete-highway.input';
import { HighwayListInput } from './input/highway-list.input';

@Resolver()
export class HighwayResolver {
  public constructor(private readonly highwayService: HighwayService) {}

  @Query(() => [HighwayType])
  @UseGuards(AuthGuard)
  public async highwayList(
    @Args('highwayListInput') highwayListInput: HighwayListInput,
  ): Promise<HighwayType[]> {
    return await this.highwayService.highwayList(highwayListInput);
  }

  @Mutation(() => HighwayType)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async addHighway(
    @Args('addHighwayInput') addHighwayInput: AddHighwayInput,
  ): Promise<HighwayType> {
    return (await this.highwayService.addHighway(
      addHighwayInput,
    )) as HighwayType;
  }

  @Mutation(() => HighwayType)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async editHighway(
    @Args('editHighwayInput') editHighwayInput: EditHighwayInput,
  ): Promise<HighwayType> {
    return (await this.highwayService.editHighway(
      editHighwayInput,
    )) as HighwayType;
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async deleteHighway(
    @Args('deleteHighwayInput') deleteHighwayInput: DeleteHighwayInput,
  ): Promise<boolean> {
    return await this.highwayService.deleteHighway(deleteHighwayInput);
  }
}
