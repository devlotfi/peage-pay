import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { HighwayService } from './highway.service';
import { AddHighwayInput } from './input/add-highway.input';
import { HighwayType } from './graphql/highway.graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { AllowRoles } from 'src/decorators/allow-roles.decorator';
import { UserRolesType } from 'src/user/graphql/user-roles.graphql';
import { EditHighwayInput } from './input/edit-highway.input';
import { DeleteHighwayInput } from './input/delete-highway.input';

@Resolver()
export class HighwayResolver {
  public constructor(private readonly highwayService: HighwayService) {}

  @Query(() => [HighwayType])
  @UseGuards(AuthGuard)
  public async highways(): Promise<HighwayType[]> {
    return await this.highwayService.highways();
  }

  @Mutation(() => HighwayType)
  @AllowRoles([UserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async addHighway(
    @Args('addHighwayInput') addHighwayInput: AddHighwayInput,
  ): Promise<HighwayType> {
    return (await this.highwayService.addHighway(
      addHighwayInput,
    )) as HighwayType;
  }

  @Mutation(() => HighwayType)
  @AllowRoles([UserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async editHighway(
    @Args('editHighwayInput') editHighwayInput: EditHighwayInput,
  ): Promise<HighwayType> {
    return (await this.highwayService.editHighway(
      editHighwayInput,
    )) as HighwayType;
  }

  @Mutation(() => Boolean)
  @AllowRoles([UserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async deleteHighway(
    @Args('deleteHighwayInput') deleteHighwayInput: DeleteHighwayInput,
  ): Promise<boolean> {
    return await this.highwayService.deleteHighway(deleteHighwayInput);
  }
}
