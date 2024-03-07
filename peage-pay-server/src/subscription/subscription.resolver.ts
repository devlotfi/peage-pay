import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SubscriptionService } from './subscription.service';
import { SubscriptionType } from './graphql/subscription.graphql';
import { AddSubscriptionInput } from './input/add-subscription.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { AllowRoles } from 'src/decorators/allow-roles.decorator';
import { UserRolesType } from 'src/user/graphql/user-roles.graphql';
import { EditSubscriptionInput } from './input/edit-subscription.input';
import { DeleteSubscriptionInput } from './input/delete-subscription.input';

@Resolver()
export class SubscriptionResolver {
  public constructor(
    private readonly subscriptionService: SubscriptionService,
  ) {}

  @Mutation(() => SubscriptionType)
  @AllowRoles([UserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async subscriptions(): Promise<SubscriptionType[]> {
    return await this.subscriptionService.subscriptions();
  }

  @Mutation(() => SubscriptionType)
  @AllowRoles([UserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async addSubscription(
    @Args('addSubscriptionInput') addSubscriptionInput: AddSubscriptionInput,
  ): Promise<SubscriptionType> {
    return await this.subscriptionService.addSubscription(addSubscriptionInput);
  }

  @Mutation(() => SubscriptionType)
  @AllowRoles([UserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async editSubscription(
    @Args('editSubscriptionInput') editSubscriptionInput: EditSubscriptionInput,
  ): Promise<SubscriptionType> {
    return await this.subscriptionService.editSubscription(
      editSubscriptionInput,
    );
  }

  @Mutation(() => Boolean)
  @AllowRoles([UserRolesType.GENERAL_ADMIN])
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
