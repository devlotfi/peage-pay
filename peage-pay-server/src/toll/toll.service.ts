import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Highway, Toll, TollNetwork, Wilaya } from '@prisma/client';
import { TollListInput } from './input/toll-list.input.gql';
import { AddTollInput } from './input/add-toll.input.gql';
import { EditTollInput } from './input/edit-toll.input.gql';
import { DeleteTollInput } from './input/delete-toll.input.gql';
import { TollByIdInput } from './input/toll-by-id.input.gql';
import { FullTollListInput } from './input/full-toll-list.input.gql';
import { TollListResult } from './result/toll-list.result.gql';

@Injectable()
export class TollService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async fullTollList(
    fullTollListInput: FullTollListInput,
  ): Promise<Toll[]> {
    return await this.databaseService.toll.findMany({
      where: {
        tollNetwork: {
          id: fullTollListInput.tollNetworkId,
        },
      },
    });
  }

  public async tollList(tollListInput: TollListInput): Promise<TollListResult> {
    if (
      tollListInput.idSearch ||
      tollListInput.nameSearch ||
      tollListInput.statusSearch ||
      tollListInput.wilayaNameSearch ||
      tollListInput.wilayaCodeSearch ||
      tollListInput.highwayNameSearch ||
      tollListInput.highwayCodeSearch
    ) {
      const tollList = await this.databaseService.toll.findMany({
        where: {
          tollNetwork: {
            id: tollListInput.tollNetworkId,
          },
          OR: [
            {
              id: {
                contains: tollListInput.idSearch,
                mode: 'insensitive',
              },
            },
            {
              name: {
                contains: tollListInput.nameSearch,
                mode: 'insensitive',
              },
            },
            {
              wilaya: {
                OR: [
                  {
                    name: {
                      contains: tollListInput.wilayaNameSearch,
                      mode: 'insensitive',
                    },
                  },
                  {
                    code: {
                      contains: tollListInput.wilayaCodeSearch,
                      mode: 'insensitive',
                    },
                  },
                ],
              },
            },
            {
              highway: {
                OR: [
                  {
                    name: {
                      contains: tollListInput.highwayNameSearch,
                      mode: 'insensitive',
                    },
                  },
                  {
                    code: {
                      contains: tollListInput.highwayCodeSearch,
                      mode: 'insensitive',
                    },
                  },
                ],
              },
            },
          ],
        },
        take: tollListInput.take,
        skip: tollListInput.skip,
      });
      const tollCount = await this.databaseService.toll.count({
        where: {
          tollNetwork: {
            id: tollListInput.tollNetworkId,
          },
          OR: [
            {
              id: {
                contains: tollListInput.idSearch,
                mode: 'insensitive',
              },
            },
            {
              name: {
                contains: tollListInput.nameSearch,
                mode: 'insensitive',
              },
            },
            {
              wilaya: {
                OR: [
                  {
                    name: {
                      contains: tollListInput.wilayaNameSearch,
                      mode: 'insensitive',
                    },
                  },
                  {
                    code: {
                      contains: tollListInput.wilayaCodeSearch,
                      mode: 'insensitive',
                    },
                  },
                ],
              },
            },
            {
              highway: {
                OR: [
                  {
                    name: {
                      contains: tollListInput.highwayNameSearch,
                      mode: 'insensitive',
                    },
                  },
                  {
                    code: {
                      contains: tollListInput.highwayCodeSearch,
                      mode: 'insensitive',
                    },
                  },
                ],
              },
            },
          ],
        },
      });
      return {
        count: tollCount,
        list: tollList as any,
      };
    } else {
      const tollList = await this.databaseService.toll.findMany({
        where: {
          tollNetwork: {
            id: tollListInput.tollNetworkId,
          },
        },
        take: tollListInput.take,
        skip: tollListInput.skip,
      });
      const tollCount = await this.databaseService.toll.count();
      return {
        count: tollCount,
        list: tollList as any,
      };
    }
  }

  public async tollById(tollByIdInput: TollByIdInput): Promise<Toll | null> {
    return await this.databaseService.toll.findUnique({
      where: {
        id: tollByIdInput.tollId,
      },
    });
  }

  public async addToll(addTollInput: AddTollInput) {
    const toll = await this.databaseService.toll.create({
      data: {
        name: addTollInput.name,
        longitude: addTollInput.longitude,
        latitude: addTollInput.latitude,
        wilaya: {
          connect: {
            id: addTollInput.wilayaId,
          },
        },
        highway: {
          connect: {
            id: addTollInput.highwayId,
          },
        },
        tollNetwork: {
          connect: {
            id: addTollInput.tollNetworkId,
          },
        },
      },
    });
    return toll;
  }

  public async editToll(editTollInput: EditTollInput): Promise<Toll> {
    const toll = await this.databaseService.toll.update({
      data: {
        name: editTollInput.name,
        status: editTollInput.status,
        longitude: editTollInput.longitude,
        latitude: editTollInput.latitude,
        wilaya: {
          connect: {
            id: editTollInput.wilayaId,
          },
        },
        highway: {
          connect: {
            id: editTollInput.highwayId,
          },
        },
      },
      where: {
        id: editTollInput.tollId,
      },
    });

    return toll;
  }

  public async deleteToll(deleteTollInput: DeleteTollInput): Promise<boolean> {
    await this.databaseService.toll.delete({
      where: {
        id: deleteTollInput.tollId,
      },
    });
    return true;
  }

  public async wilaya(wilayaId: string): Promise<Wilaya | null> {
    return await this.databaseService.wilaya.findUnique({
      where: {
        id: wilayaId,
      },
    });
  }

  public async highway(highwayId: string): Promise<Highway | null> {
    return await this.databaseService.highway.findUnique({
      where: {
        id: highwayId,
      },
    });
  }

  public async tollNetwork(tollNetworkId: string): Promise<TollNetwork | null> {
    return await this.databaseService.tollNetwork.findUnique({
      where: {
        id: tollNetworkId,
      },
    });
  }
}
