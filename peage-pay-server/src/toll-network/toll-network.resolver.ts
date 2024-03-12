import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TollNetworkService } from './toll-network.service';
import { TollNetworkType } from './graphql/toll-network.gql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { TollNetworkListInput } from './input/toll-network-list.input.gql';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { BaseUserRolesType } from 'src/base-user/graphql/base-user-roles.gql';
import { AddTollNetworkInput } from './input/add-toll-network.input.gql';
import { EditTollNetworkInput } from './input/edit-toll-network.input.gql';
import { DeleteTollNetworkInput } from './input/delete-toll-network.input.gql';
import { TollNetworkByIdInput } from './input/toll-network-by-id.input.gql';

@Resolver()
export class TollNetworkResolver {
  public constructor(private readonly tollNetworkService: TollNetworkService) {}

  @Query(() => [TollNetworkType])
  @UseGuards(AuthGuard)
  public async tollNetworkList(
    @Args('tollNetworkListInput') tollNetworkListInput: TollNetworkListInput,
  ): Promise<TollNetworkType[]> {
    return await this.tollNetworkService.tollNetworkList(tollNetworkListInput);
  }

  @Query(() => [TollNetworkType])
  @UseGuards(AuthGuard)
  public async tollNetworkById(
    @Args('tollNetworkByIdInput') tollNetworkByIdInput: TollNetworkByIdInput,
  ): Promise<TollNetworkType | null> {
    return await this.tollNetworkService.tollNetworkById(tollNetworkByIdInput);
  }

  @Mutation(() => TollNetworkType)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async addTollNetwork(
    @Args('addTollNetworkInput') addTollNetworkInput: AddTollNetworkInput,
  ): Promise<TollNetworkType> {
    return (await this.tollNetworkService.addTollNetwork(
      addTollNetworkInput,
    )) as TollNetworkType;
  }

  @Mutation(() => TollNetworkType)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async editTollNetwork(
    @Args('editTollNetworkInput') editTollNetworkInput: EditTollNetworkInput,
  ): Promise<TollNetworkType> {
    return (await this.tollNetworkService.editTollNetwork(
      editTollNetworkInput,
    )) as TollNetworkType;
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async deleteTollNetwork(
    @Args('deleteTollNetworkInput')
    deleteTollNetworkInput: DeleteTollNetworkInput,
  ): Promise<boolean> {
    return await this.tollNetworkService.deleteTollNetwork(
      deleteTollNetworkInput,
    );
  }
}
