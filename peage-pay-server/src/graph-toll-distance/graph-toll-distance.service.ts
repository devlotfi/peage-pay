import { Injectable } from '@nestjs/common';
import { GraphTollDistance, Prisma, Toll, TollDistance } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { GraphTollDistanceListForTollInput } from './input/graph-toll-distance-list-for-toll.input.gql';
import { GraphQLError } from 'graphql';
import { AddGraphTollDistanceInput } from './input/add-graph-toll-distance.input.gql';
import { DeleteGraphTollDistanceInput } from './input/delete-graph-toll-distance.input.gql';
import { GraphTollDistanceErrors } from './graphql/graph-toll-distance-errors.gql';
import { GraphTollDistanceListForTollNetworkInput } from './input/graph-toll-distance-list-for-toll-network.input.gql';

@Injectable()
export class GraphTollDistanceService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async graphTollDistanceListForToll(
    graphTollDistanceListForTollInput: GraphTollDistanceListForTollInput,
  ): Promise<TollDistance[]> {
    return await this.databaseService.graphTollDistance.findMany({
      where: {
        OR: [
          {
            fromToll: {
              id: graphTollDistanceListForTollInput.tollId,
            },
          },
          {
            toToll: {
              id: graphTollDistanceListForTollInput.tollId,
            },
          },
        ],
      },
      take: graphTollDistanceListForTollInput.take,
      skip: graphTollDistanceListForTollInput.skip,
    });
  }

  public async graphTollDistanceListForTollNetwork(
    graphTollDistanceListForTollNetworkInput: GraphTollDistanceListForTollNetworkInput,
  ): Promise<TollDistance[]> {
    return await this.databaseService.graphTollDistance.findMany({
      where: {
        OR: [
          {
            fromToll: {
              tollNetwork: {
                id: graphTollDistanceListForTollNetworkInput.tollNetworkId,
              },
            },
          },
          {
            toToll: {
              tollNetwork: {
                id: graphTollDistanceListForTollNetworkInput.tollNetworkId,
              },
            },
          },
        ],
      },
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
                id: addGraphTollDistanceInput.toTollId,
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
