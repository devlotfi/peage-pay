import { Injectable } from '@nestjs/common';
import { Subscription } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { AddSubscriptionInput } from './input/add-subscription.input.gql';
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
      return {
        count: subscriptionCount,
        list: subscriptionList as any,
      };
    } else {
      const subscriptionList = await this.databaseService.subscription.findMany(
        {
          take: subscriptionListInput.take,
          skip: subscriptionListInput.skip,
        },
      );
      const subscriptionCount = await this.databaseService.subscription.count();
      return {
        count: subscriptionCount,
        list: subscriptionList as any,
      };
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
    const subscription = await this.databaseService.subscription.create({
      data: {
        name: addSubscriptionInput.name,
        days: addSubscriptionInput.days,
        price: addSubscriptionInput.price,
      },
    });
    return subscription;
  }

  public async editSubscription(
    editSubscriptionInput: EditSubscriptionInput,
  ): Promise<Subscription> {
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
  }

  public async deleteSubscription(
    deleteSubscriptionInput: DeleteSubscriptionInput,
  ): Promise<boolean> {
    await this.databaseService.subscription.delete({
      where: {
        id: deleteSubscriptionInput.subscriptionId,
      },
    });
    return true;
  }
}
