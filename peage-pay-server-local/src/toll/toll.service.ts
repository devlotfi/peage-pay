import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma, Toll } from '@prisma/client';
import { TollListInput } from './input/toll-list.input.gql';
import { AddTollInput } from './input/add-toll.input.gql';
import { EditTollInput } from './input/edit-toll.input.gql';
import { TollListResult } from './result/toll-list.result.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';

@Injectable()
export class TollService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async globalTollList(): Promise<Toll[]> {
    return await this.databaseService.toll.findMany();
  }

  public async fullTollList(fullTollListInput: IdInput): Promise<Toll[]> {
    return await this.databaseService.toll.findMany({
      where: {
        tollNetwork: {
          id: fullTollListInput.id,
        },
      },
    });
  }

  public async tollList(tollListInput: TollListInput): Promise<TollListResult> {
    if (
      tollListInput.idSearch ||
      tollListInput.nameSearch ||
      tollListInput.wilayaNameSearch ||
      tollListInput.wilayaCodeSearch ||
      tollListInput.highwayNameSearch ||
      tollListInput.highwayCodeSearch
    ) {
      const whereQuery: Prisma.TollWhereInput = {
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
      };
      const tollList = await this.databaseService.toll.findMany({
        where: whereQuery,
        take: tollListInput.take,
        skip: tollListInput.skip,
      });
      const tollCount = await this.databaseService.toll.count({
        where: whereQuery,
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
      const tollCount = await this.databaseService.toll.count({
        where: {
          tollNetwork: {
            id: tollListInput.tollNetworkId,
          },
        },
      });
      return {
        count: tollCount,
        list: tollList as any,
      };
    }
  }

  public async tollById(tollByIdInput: IdInput): Promise<Toll | null> {
    return await this.databaseService.toll.findUnique({
      where: {
        id: tollByIdInput.id,
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

  public async deleteToll(deleteTollInput: IdInput): Promise<boolean> {
    try {
      await this.databaseService.toll.delete({
        where: {
          id: deleteTollInput.id,
        },
      });
    } catch (error) {
      console.log(error);
    }
    return true;
  }
}
