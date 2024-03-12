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

@Injectable()
export class SubscriptionService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async subscriptionList(
    subscriptionListInput: SubscriptionListInput,
  ): Promise<Subscription[]> {
    if (subscriptionListInput.idSearch || subscriptionListInput.nameSearch) {
      return await this.databaseService.subscription.findMany({
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
      });
    } else {
      return await this.databaseService.subscription.findMany({
        take: subscriptionListInput.take,
        skip: subscriptionListInput.skip,
      });
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
          vehicleType: addSubscriptionInput.vehicleType,
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
          vehicleType: editSubscriptionInput.vehicleType,
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
