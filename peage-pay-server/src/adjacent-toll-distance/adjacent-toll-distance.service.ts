import { Injectable } from '@nestjs/common';
import {
  AdjacentTollDistance,
  Prisma,
  Toll,
  TollDistance,
} from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { AdjacentTollDistanceListInput } from './input/toll-distance-list.input.gql';
import { GraphQLError } from 'graphql';
import { AddAdjacentTollDistanceInput } from './input/add-adjacent-toll-distance.input.gql';
import { DeleteAdjacentTollDistanceInput } from './input/delete-adjacent-toll-distance.input.gql';
import { AdjacentTollDistanceErrors } from './graphql/adjacent-toll-distance-errors.gql';

@Injectable()
export class AdjacentTollDistanceService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async adjacentTollDistanceList(
    adjacentTollDistanceListInput: AdjacentTollDistanceListInput,
  ): Promise<TollDistance[]> {
    return await this.databaseService.adjacentTollDistance.findMany({
      where: {
        OR: [
          {
            fromToll: {
              id: adjacentTollDistanceListInput.tollId,
            },
            toToll: {
              id: adjacentTollDistanceListInput.tollId,
            },
          },
        ],
      },
      take: adjacentTollDistanceListInput.take,
      skip: adjacentTollDistanceListInput.skip,
    });
  }

  public async addAdjacentTollDistance(
    addAdjacentTollDistanceInput: AddAdjacentTollDistanceInput,
  ): Promise<AdjacentTollDistance> {
    try {
      const adjacentTollDistance =
        await this.databaseService.adjacentTollDistance.create({
          data: {
            fromToll: {
              connect: {
                id: addAdjacentTollDistanceInput.fromTollId,
              },
            },
            toToll: {
              connect: {
                id: addAdjacentTollDistanceInput.fromTollId,
              },
            },
            distance: addAdjacentTollDistanceInput.distance,
          },
        });
      return adjacentTollDistance;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new GraphQLError(
            AdjacentTollDistanceErrors.ADJACENT_TOLL_DISTANCE_EXISTS,
          );
        }
      }
      throw error;
    }
  }

  public async deleteAdjacentTollDistance(
    deleteAdjacentTollDistanceInput: DeleteAdjacentTollDistanceInput,
  ): Promise<boolean> {
    await this.databaseService.adjacentTollDistance.delete({
      where: {
        fromTollId_toTollId: {
          fromTollId: deleteAdjacentTollDistanceInput.fromTollId,
          toTollId: deleteAdjacentTollDistanceInput.toTollId,
        },
      },
    });
    return true;
  }

  public async toll(tollId: string): Promise<Toll | null> {
    return await this.databaseService.toll.findUnique({
      where: {
        id: tollId,
      },
    });
  }
}
