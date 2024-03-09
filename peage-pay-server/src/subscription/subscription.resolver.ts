import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SubscriptionService } from './subscription.service';
import { SubscriptionType } from './graphql/subscription.gql';
import { AddSubscriptionInput } from './input/add-subscription.input.gql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { BaseUserRolesType } from 'src/base-user/graphql/base-user-roles.gql';
import { EditSubscriptionInput } from './input/edit-subscription.input.gql';
import { DeleteSubscriptionInput } from './input/delete-subscription.input.gql';
import { SubscriptionListInput } from './input/subscription-list.input.gql';

@Resolver()
export class SubscriptionResolver {
  public constructor(
    private readonly subscriptionService: SubscriptionService,
  ) {}

  @Query(() => [SubscriptionType])
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async subscriptionList(
    @Args('subscriptionListInput') subscriptionListInput: SubscriptionListInput,
  ): Promise<SubscriptionType[]> {
    return (await this.subscriptionService.subscriptionList(
      subscriptionListInput,
    )) as any;
  }

  @Mutation(() => SubscriptionType)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async addSubscription(
    @Args('addSubscriptionInput') addSubscriptionInput: AddSubscriptionInput,
  ): Promise<SubscriptionType> {
    return (await this.subscriptionService.addSubscription(
      addSubscriptionInput,
    )) as any;
  }

  @Mutation(() => SubscriptionType)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async editSubscription(
    @Args('editSubscriptionInput') editSubscriptionInput: EditSubscriptionInput,
  ): Promise<SubscriptionType> {
    return (await this.subscriptionService.editSubscription(
      editSubscriptionInput,
    )) as any;
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async deleteSubscription(
    @Args('deleteSubscriptionInput')
    deleteSubscriptionInput: DeleteSubscriptionInput,
  ): Promise<boolean> {
    return await this.subscriptionService.deleteSubscription(
      deleteSubscriptionInput,
    );
  }
}
