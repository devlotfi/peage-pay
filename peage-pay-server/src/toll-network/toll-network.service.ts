import { Injectable } from '@nestjs/common';
import { TollNetworkListInput } from './input/toll-network-list.input.gql';
import { Prisma, TollNetwork } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { AddTollNetworkInput } from './input/add-toll-network.input.gql';
import { EditTollNetworkInput } from './input/edit-toll-network.input.gql';
import { TollNetworkListResult } from './result/toll-network-list.result.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';

@Injectable()
export class TollNetworkService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async tollNetworkList(
    tollNetworkListInput: TollNetworkListInput,
  ): Promise<TollNetworkListResult> {
    if (tollNetworkListInput.idSearch || tollNetworkListInput.nameSearch) {
      const whereQuery: Prisma.TollNetworkWhereInput = {
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
      };
      const tollNetworkList = await this.databaseService.tollNetwork.findMany({
        where: whereQuery,
        take: tollNetworkListInput.take,
        skip: tollNetworkListInput.skip,
      });
      const tollNetworkCount = await this.databaseService.tollNetwork.count({
        where: whereQuery,
      });
      return {
        count: tollNetworkCount,
        list: tollNetworkList as any,
      };
    } else {
      const tollNetworkList = await this.databaseService.tollNetwork.findMany({
        take: tollNetworkListInput.take,
        skip: tollNetworkListInput.skip,
      });
      const tollNetworkCount = await this.databaseService.tollNetwork.count();
      return {
        count: tollNetworkCount,
        list: tollNetworkList as any,
      };
    }
  }

  public async tollNetworkById(
    tollNetworkByIdInput: IdInput,
  ): Promise<TollNetwork | null> {
    return await this.databaseService.tollNetwork.findUnique({
      where: {
        id: tollNetworkByIdInput.id,
      },
    });
  }

  public async addTollNetwork(
    addTollNetworkInput: AddTollNetworkInput,
  ): Promise<TollNetwork> {
    const tollNetwork = await this.databaseService.tollNetwork.create({
      data: {
        name: addTollNetworkInput.name,
      },
    });
    return tollNetwork;
  }

  public async editTollNetwork(
    editTollNetworkInput: EditTollNetworkInput,
  ): Promise<TollNetwork> {
    const tollNetwork = await this.databaseService.tollNetwork.update({
      data: {
        name: editTollNetworkInput.name,
      },
      where: {
        id: editTollNetworkInput.tollNetworkId,
      },
    });
    return tollNetwork;
  }

  public async deleteTollNetwork(
    deleteTollNetworkInput: IdInput,
  ): Promise<boolean> {
    await this.databaseService.tollNetwork.delete({
      where: {
        id: deleteTollNetworkInput.id,
      },
    });
    return true;
  }
}
