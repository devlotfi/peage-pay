import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SubscriptionService } from './subscription.service';
import { SubscriptionType } from './graphql/subscription.graphql';
import { AddSubscriptionInput } from './input/add-subscription.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { BaseUserRolesType } from 'src/base-user/graphql/base-user-roles.graphql';
import { EditSubscriptionInput } from './input/edit-subscription.input';
import { DeleteSubscriptionInput } from './input/delete-subscription.input';
import { SubscriptionListInput } from './input/subscription-list.input';

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
    return await this.subscriptionService.subscriptionList(
      subscriptionListInput,
    );
  }

  @Mutation(() => SubscriptionType)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async addSubscription(
    @Args('addSubscriptionInput') addSubscriptionInput: AddSubscriptionInput,
  ): Promise<SubscriptionType> {
    return await this.subscriptionService.addSubscription(addSubscriptionInput);
  }

  @Mutation(() => SubscriptionType)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async editSubscription(
    @Args('editSubscriptionInput') editSubscriptionInput: EditSubscriptionInput,
  ): Promise<SubscriptionType> {
    return await this.subscriptionService.editSubscription(
      editSubscriptionInput,
    );
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
