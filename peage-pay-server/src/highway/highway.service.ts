import { Injectable } from '@nestjs/common';
import { Highway, Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { AddHighwayInput } from './input/add-highway.input';
import { EditHighwayInput } from './input/edit-highway.input';
import { DeleteHighwayInput } from './input/delete-highway.input';
import { GraphQLError } from 'graphql';
import { HighwayErrors } from './graphql/highway-errors.graphql';
import { HighwayListInput } from './input/highway-list.input';

@Injectable()
export class HighwayService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async highwayList(
    highwayListInput: HighwayListInput,
  ): Promise<Highway[]> {
    return await this.databaseService.highway.findMany({
      where: highwayListInput.search
        ? highwayListInput.searchField
          ? {
              [highwayListInput.searchField]: {
                contains: highwayListInput.search,
                mode: 'insensitive',
              },
            }
          : {
              OR: [
                {
                  id: {
                    contains: highwayListInput.search,
                    mode: 'insensitive',
                  },
                },
                {
                  name: {
                    contains: highwayListInput.search,
                    mode: 'insensitive',
                  },
                },
                {
                  code: {
                    contains: highwayListInput.search,
                    mode: 'insensitive',
                  },
                },
              ],
            }
        : undefined,

      orderBy: highwayListInput.orderByField
        ? {
            [highwayListInput.orderByField]: highwayListInput.sortMode
              ? highwayListInput.sortMode
              : 'desc',
          }
        : undefined,

      take: highwayListInput.take,
      skip: highwayListInput.skip,
    });
  }

  public async addHighway(addHighwayInput: AddHighwayInput): Promise<Highway> {
    try {
      const highway = await this.databaseService.highway.create({
        data: {
          name: addHighwayInput.name,
          code: addHighwayInput.code,
        },
      });

      return highway;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new GraphQLError(HighwayErrors.HIGHWAY_EXISTS);
        }
      }
      throw error;
    }
  }

  public async editHighway(
    editHighwayInput: EditHighwayInput,
  ): Promise<Highway> {
    try {
      const highway = await this.databaseService.highway.update({
        data: {
          name: editHighwayInput.name,
          code: editHighwayInput.code,
        },
        where: {
          id: editHighwayInput.highwayId,
        },
      });

      return highway;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new GraphQLError(HighwayErrors.HIGHWAY_EXISTS);
        }
      }
      throw error;
    }
  }

  public async deleteHighway(
    deleteHighwayInput: DeleteHighwayInput,
  ): Promise<boolean> {
    try {
      await this.databaseService.highway.delete({
        where: {
          id: deleteHighwayInput.highwayId,
        },
      });
      return true;
    } catch (error) {
      throw error;
    }
  }
}
