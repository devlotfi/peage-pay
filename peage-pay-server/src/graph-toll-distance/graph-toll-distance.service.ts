import { Injectable } from '@nestjs/common';
import { GraphTollDistance, Prisma, Toll, TollDistance } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { GraphTollDistanceListInput } from './input/graph-toll-distance-list.input.gql';
import { GraphQLError } from 'graphql';
import { AddGraphTollDistanceInput } from './input/add-graph-toll-distance.input.gql';
import { DeleteGraphTollDistanceInput } from './input/delete-graph-toll-distance.input.gql';
import { GraphTollDistanceErrors } from './graphql/graph-toll-distance-errors.gql';

@Injectable()
export class GraphTollDistanceService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async graphTollDistanceList(
    graphTollDistanceListInput: GraphTollDistanceListInput,
  ): Promise<TollDistance[]> {
    return await this.databaseService.graphTollDistance.findMany({
      where: {
        OR: [
          {
            fromToll: {
              id: graphTollDistanceListInput.tollId,
            },
            toToll: {
              id: graphTollDistanceListInput.tollId,
            },
          },
        ],
      },
      take: graphTollDistanceListInput.take,
      skip: graphTollDistanceListInput.skip,
    });
  }

  public async addGraphTollDistance(
    addGraphTollDistanceInput: AddGraphTollDistanceInput,
  ): Promise<GraphTollDistance> {
    try {
      const graphTollDistance =
        await this.databaseService.graphTollDistance.create({
          data: {
            fromToll: {
              connect: {
                id: addGraphTollDistanceInput.fromTollId,
              },
            },
            toToll: {
              connect: {
                id: addGraphTollDistanceInput.fromTollId,
              },
            },
            distance: addGraphTollDistanceInput.distance,
          },
        });
      return graphTollDistance;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new GraphQLError(
            GraphTollDistanceErrors.GRAPH_TOLL_DISTANCE_EXISTS,
          );
        }
      }
      throw error;
    }
  }

  public async deleteGraphTollDistance(
    deleteGraphTollDistanceInput: DeleteGraphTollDistanceInput,
  ): Promise<boolean> {
    await this.databaseService.graphTollDistance.delete({
      where: {
        fromTollId_toTollId: {
          fromTollId: deleteGraphTollDistanceInput.fromTollId,
          toTollId: deleteGraphTollDistanceInput.toTollId,
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
