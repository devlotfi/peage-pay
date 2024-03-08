import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { TollType } from './graphql/toll-type.gql';
import { Highway, Prisma, Wilaya } from '@prisma/client';
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
    return await this.databaseService.toll.findMany({
      where: {
        OR: [
          {
            name: {
              contains: tollListInput.nameSearch,
              mode: 'insensitive',
            },
          },
        ],
        wilaya: {
          OR: [
            {
              id: {
                contains: tollListInput.wilayaIdSearch,
                mode: 'insensitive',
              },
            },
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
              id: {
                contains: tollListInput.highwayIdSearch,
                mode: 'insensitive',
              },
            },
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
      include: {
        wilaya: true,
        highway: true,
      },
      take: tollListInput.take,
      skip: tollListInput.skip,
    });
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
        },
        include: {
          wilaya: true,
          highway: true,
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
        include: {
          wilaya: true,
          highway: true,
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

  public async wilaya(toll: TollType): Promise<Wilaya | null> {
    return await this.databaseService.wilaya.findUnique({
      where: {
        id: toll.wilayaId,
      },
    });
  }

  public async highway(toll: TollType): Promise<Highway | null> {
    return await this.databaseService.highway.findUnique({
      where: {
        id: toll.highwayId,
      },
    });
  }
}
