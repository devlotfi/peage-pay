import { Injectable } from '@nestjs/common';
import { Highway, Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { AddHighwayInput } from './input/add-highway.input.gql';
import { EditHighwayInput } from './input/edit-highway.input.gql';
import { DeleteHighwayInput } from './input/delete-highway.input.gql';
import { GraphQLError } from 'graphql';
import { HighwayErrors } from './graphql/highway-errors.gql';
import { HighwayListInput } from './input/highway-list.input.gql';

@Injectable()
export class HighwayService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async highwayList(
    highwayListInput: HighwayListInput,
  ): Promise<Highway[]> {
    return await this.databaseService.highway.findMany({
      where: {
        OR: [
          {
            id: {
              contains: highwayListInput.idSearch,
              mode: 'insensitive',
            },
          },
          {
            name: {
              contains: highwayListInput.nameSearch,
              mode: 'insensitive',
            },
          },
          {
            code: {
              contains: highwayListInput.codeSearch,
              mode: 'insensitive',
            },
          },
        ],
      },

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
    await this.databaseService.highway.delete({
      where: {
        id: deleteHighwayInput.highwayId,
      },
    });
    return true;
  }
}
