import { Injectable } from '@nestjs/common';
import { TollNetworkListInput } from './input/toll-network-list.input.gql';
import { TollNetwork } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { AddTollNetworkInput } from './input/add-toll-network.input.gql';
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
