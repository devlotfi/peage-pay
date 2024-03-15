import { Injectable } from '@nestjs/common';
import { TollNetworkListInput } from './input/toll-network-list.input.gql';
import { Prisma, TollNetwork } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { AddTollNetworkInput } from './input/add-toll-network.input.gql';
import { GraphQLError } from 'graphql';
import { TollNetworkErrors } from './graphql/toll-network-errors.gql';
import { EditTollNetworkInput } from './input/edit-toll-network.input.gql';
import { DeleteTollNetworkInput } from './input/delete-toll-network.input.gql';
import { TollNetworkByIdInput } from './input/toll-network-by-id.input.gql';
import { TollNetworkListResult } from './result/toll-network-list.result.gql';

@Injectable()
export class TollNetworkService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async tollNetworkList(
    tollNetworkListInput: TollNetworkListInput,
  ): Promise<TollNetworkListResult> {
    if (tollNetworkListInput.idSearch || tollNetworkListInput.nameSearch) {
      const tollNetworkList = await this.databaseService.tollNetwork.findMany({
        where: {
          OR: [
            {
              id: {
                contains: tollNetworkListInput.idSearch,
                mode: 'insensitive',
              },
            },
            {
              name: {
                contains: tollNetworkListInput.nameSearch,
                mode: 'insensitive',
              },
            },
          ],
        },

        take: tollNetworkListInput.take,
        skip: tollNetworkListInput.skip,
      });
      const tollNetworkCount = await this.databaseService.tollNetwork.count({
        where: {
          OR: [
            {
              id: {
                contains: tollNetworkListInput.idSearch,
                mode: 'insensitive',
              },
            },
            {
              name: {
                contains: tollNetworkListInput.nameSearch,
                mode: 'insensitive',
              },
            },
          ],
        },
      });
      const tollNetworkListResult = new TollNetworkListResult();
      tollNetworkListResult.list = tollNetworkList as any[];
      tollNetworkListResult.count = tollNetworkCount;
      return tollNetworkListResult;
    } else {
      const tollNetworkList = await this.databaseService.tollNetwork.findMany({
        take: tollNetworkListInput.take,
        skip: tollNetworkListInput.skip,
      });
      const tollNetworkListResult = new TollNetworkListResult();
      tollNetworkListResult.list = tollNetworkList as any[];
      tollNetworkListResult.count = tollNetworkList.length;
      return tollNetworkListResult;
    }
  }

  public async tollNetworkById(
    tollNetworkByIdInput: TollNetworkByIdInput,
  ): Promise<TollNetwork | null> {
    return await this.databaseService.tollNetwork.findUnique({
      where: {
        id: tollNetworkByIdInput.tollNetworkId,
      },
    });
  }

  public async addTollNetwork(
    addTollNetworkInput: AddTollNetworkInput,
  ): Promise<TollNetwork> {
    try {
      const tollNetwork = await this.databaseService.tollNetwork.create({
        data: {
          name: addTollNetworkInput.name,
        },
      });

      return tollNetwork;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new GraphQLError(TollNetworkErrors.TOLL_NETWORK_EXISTS);
        }
      }
      throw error;
    }
  }

  public async editTollNetwork(
    editTollNetworkInput: EditTollNetworkInput,
  ): Promise<TollNetwork> {
    try {
      const tollNetwork = await this.databaseService.tollNetwork.update({
        data: {
          name: editTollNetworkInput.name,
        },
        where: {
          id: editTollNetworkInput.tollNetworkId,
        },
      });

      return tollNetwork;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new GraphQLError(TollNetworkErrors.TOLL_NETWORK_EXISTS);
        }
      }
      throw error;
    }
  }

  public async deleteTollNetwork(
    deleteTollNetworkInput: DeleteTollNetworkInput,
  ): Promise<boolean> {
    await this.databaseService.tollNetwork.delete({
      where: {
        id: deleteTollNetworkInput.tollNetworkId,
      },
    });
    return true;
  }
}
