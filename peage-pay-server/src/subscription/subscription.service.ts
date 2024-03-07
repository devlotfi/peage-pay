import { Injectable } from '@nestjs/common';
import { Prisma, Subscription } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { AddSubscriptionInput } from './input/add-subscription.input';
import { GraphQLError } from 'graphql';
import { SubscriptionErrors } from './graphql/subscription-errors.graphql';
import { EditSubscriptionInput } from './input/edit-subscription.input';
import { DeleteSubscriptionInput } from './input/delete-subscription.input';

@Injectable()
export class SubscriptionService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async subscriptions(): Promise<Subscription[]> {
    return await this.databaseService.subscription.findMany();
  }

  public async addSubscription(
    addSubscriptionInput: AddSubscriptionInput,
  ): Promise<Subscription> {
    try {
      const subscription = await this.databaseService.subscription.create({
        data: {
          name: addSubscriptionInput.name,
        },
      });
      return subscription;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new GraphQLError(SubscriptionErrors.SUBSCRIPTION_EXISTS);
        }
      }
      throw error;
    }
  }

  public async editSubscription(
    editSubscriptionInput: EditSubscriptionInput,
  ): Promise<Subscription> {
    try {
      const subscription = await this.databaseService.subscription.update({
        data: {
          name: editSubscriptionInput.name,
        },
        where: {
          id: editSubscriptionInput.id,
        },
      });
      return subscription;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new GraphQLError(SubscriptionErrors.SUBSCRIPTION_EXISTS);
        }
      }
      throw error;
    }
  }

  public async deleteSubscription(
    deleteSubscriptionInput: DeleteSubscriptionInput,
  ): Promise<boolean> {
    await this.databaseService.subscription.delete({
      where: {
        id: deleteSubscriptionInput.id,
      },
    });
    return true;
  }
}
