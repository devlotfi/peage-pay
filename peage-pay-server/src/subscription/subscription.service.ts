import { Injectable } from '@nestjs/common';
import { Prisma, Subscription } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { AddSubscriptionInput } from './input/add-subscription.input';
import { GraphQLError } from 'graphql';
import { SubscriptionErrors } from './graphql/subscription-errors.graphql';
import { EditSubscriptionInput } from './input/edit-subscription.input';
import { DeleteSubscriptionInput } from './input/delete-subscription.input';
import { SubscriptionListInput } from './input/subscription-list.input';

@Injectable()
export class SubscriptionService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async subscriptionList(
    subscriptionListInput: SubscriptionListInput,
  ): Promise<Subscription[]> {
    return await this.databaseService.subscription.findMany({
      where: subscriptionListInput.search
        ? subscriptionListInput.searchField
          ? {
              [subscriptionListInput.searchField]: {
                contains: subscriptionListInput.search,
                mode: 'insensitive',
              },
            }
          : {
              OR: [
                {
                  id: {
                    contains: subscriptionListInput.search,
                    mode: 'insensitive',
                  },
                },
                {
                  name: {
                    contains: subscriptionListInput.search,
                    mode: 'insensitive',
                  },
                },
              ],
            }
        : undefined,

      orderBy: subscriptionListInput.orderByField
        ? {
            [subscriptionListInput.orderByField]: subscriptionListInput.sortMode
              ? subscriptionListInput.sortMode
              : 'desc',
          }
        : undefined,

      take: subscriptionListInput.take,
      skip: subscriptionListInput.skip,
    });
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
