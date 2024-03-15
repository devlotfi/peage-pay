import { Injectable } from '@nestjs/common';
import { Prisma, Subscription } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { AddSubscriptionInput } from './input/add-subscription.input.gql';
import { GraphQLError } from 'graphql';
import { SubscriptionErrors } from './graphql/subscription-errors.gql';
import { EditSubscriptionInput } from './input/edit-subscription.input.gql';
import { DeleteSubscriptionInput } from './input/delete-subscription.input.gql';
import { SubscriptionListInput } from './input/subscription-list.input.gql';
import { SubscriptionByIdInput } from './input/subscription-by-id.input.gql';
import { SubscriptionListResult } from './result/subscription-list.result.gql';

@Injectable()
export class SubscriptionService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async subscriptionList(
    subscriptionListInput: SubscriptionListInput,
  ): Promise<SubscriptionListResult> {
    if (subscriptionListInput.idSearch || subscriptionListInput.nameSearch) {
      const subscriptionList = await this.databaseService.subscription.findMany(
        {
          where: {
            OR: [
              {
                id: {
                  contains: subscriptionListInput.idSearch,
                  mode: 'insensitive',
                },
              },
              {
                name: {
                  contains: subscriptionListInput.nameSearch,
                  mode: 'insensitive',
                },
              },
            ],
          },
          take: subscriptionListInput.take,
          skip: subscriptionListInput.skip,
        },
      );
      const subscriptionCount = await this.databaseService.subscription.count({
        where: {
          OR: [
            {
              id: {
                contains: subscriptionListInput.idSearch,
                mode: 'insensitive',
              },
            },
            {
              name: {
                contains: subscriptionListInput.nameSearch,
                mode: 'insensitive',
              },
            },
          ],
        },
      });
      const subscriptionListResult = new SubscriptionListResult();
      subscriptionListResult.list = subscriptionList as any[];
      subscriptionListResult.count = subscriptionCount;
      return subscriptionListResult;
    } else {
      const subscriptionList = await this.databaseService.subscription.findMany(
        {
          take: subscriptionListInput.take,
          skip: subscriptionListInput.skip,
        },
      );
      const subscriptionListResult = new SubscriptionListResult();
      subscriptionListResult.list = subscriptionList as any[];
      subscriptionListResult.count = subscriptionList.length;
      return subscriptionListResult;
    }
  }

  public async subscriptionById(
    subscriptionByIdInput: SubscriptionByIdInput,
  ): Promise<Subscription | null> {
    return await this.databaseService.subscription.findUnique({
      where: {
        id: subscriptionByIdInput.subscriptionId,
      },
    });
  }

  public async addSubscription(
    addSubscriptionInput: AddSubscriptionInput,
  ): Promise<Subscription> {
    try {
      const subscription = await this.databaseService.subscription.create({
        data: {
          name: addSubscriptionInput.name,
          days: addSubscriptionInput.days,
          price: addSubscriptionInput.price,
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
          days: editSubscriptionInput.days,
          price: editSubscriptionInput.price,
        },
        where: {
          id: editSubscriptionInput.subscriptionId,
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
