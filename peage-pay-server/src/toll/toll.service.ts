import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Highway, Prisma, TollNetwork, Wilaya } from '@prisma/client';
import { TollListInput } from './input/toll-list.input.gql';
import { AddTollInput } from './input/add-toll.input.gql';
import { EditTollInput } from './input/edit-toll.input.gql';
import { DeleteTollInput } from './input/delete-toll.input.gql';
import { GraphQLError } from 'graphql';
import { TollErrors } from './graphql/toll-errors.gql';

@Injectable()
export class TollService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async tollList(tollListInput: TollListInput) {
    if (
      tollListInput.idSearch ||
      tollListInput.nameSearch ||
      tollListInput.statusSearch ||
      tollListInput.wilayaNameSearch ||
      tollListInput.wilayaCodeSearch ||
      tollListInput.highwayNameSearch ||
      tollListInput.highwayCodeSearch ||
      tollListInput.tollNetworkNameSearch
    ) {
      return await this.databaseService.toll.findMany({
        where: {
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
              status: {
                equals: tollListInput.statusSearch,
              },
            },
          ],
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
                  equals: tollListInput.wilayaCodeSearch,
                },
              },
            ],
          },
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
          tollNetwork: {
            OR: [
              {
                name: {
                  contains: tollListInput.tollNetworkNameSearch,
                  mode: 'insensitive',
                },
              },
            ],
          },
        },
        take: tollListInput.take,
        skip: tollListInput.skip,
      });
    } else {
      return await this.databaseService.toll.findMany({
        take: tollListInput.take,
        skip: tollListInput.skip,
      });
    }
  }

  public async addToll(addTollInput: AddTollInput) {
    try {
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
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new GraphQLError(TollErrors.TOLL_EXISTS);
        }
      }
      throw error;
    }
  }

  public async editToll(editTollInput: EditTollInput) {
    try {
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
          tollNetwork: {
            connect: {
              id: editTollInput.tollNetworkId,
            },
          },
        },
        where: {
          id: editTollInput.tollId,
        },
      });

      return toll;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new GraphQLError(TollErrors.TOLL_EXISTS);
        }
      }
      throw error;
    }
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
