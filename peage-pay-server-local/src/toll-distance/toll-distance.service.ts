import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { $Enums, Prisma, Section, Toll } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { IdInput } from 'src/shared/graphql/id-input.gql';
import { TollDistanceListInput } from './input/toll-distance-list.input.gql';
import { TollDistanceListResult } from './result/toll-distance-list.result.gql';
import { TollDistanceRedisPrefixes } from './toll-distance-prefixes';
import { TollDistanceInput } from './input/toll-distance.input.gql';

class GraphToll implements Toll {
  public constructor(toll: Toll) {
    this.id = toll.id;
    this.name = toll.name;
    this.latitude = toll.latitude;
    this.longitude = toll.longitude;
    this.wilayaId = toll.wilayaId;
    this.highwayId = toll.highwayId;
    this.tollNetworkId = toll.tollNetworkId;
    this.createdAt = toll.createdAt;
    this.updatedAt = toll.updatedAt;
  }

  public id: string;
  public name: string;
  public latitude: Decimal;
  public longitude: Decimal;
  public wilayaId: string;
  public highwayId: string;
  public tollNetworkId: string;
  public createdAt: Date;
  public updatedAt: Date;

  public connectedSections: GraphSection[] = [];
}

class GraphSection implements Section {
  public constructor(
    section: Section,
    fromGraphToll: GraphToll,
    toGraphToll: GraphToll,
  ) {
    this.fromTollId = section.fromTollId;
    this.toTollId = section.toTollId;
    this.distance = section.distance;

    this.fromGraphToll = fromGraphToll;
    this.toGraphToll = toGraphToll;
  }

  public fromTollId: string;
  public toTollId: string;
  public distance: Decimal;

  public fromGraphToll: GraphToll;
  public toGraphToll: GraphToll;
}

class GraphTollDistance {
  public constructor(
    fromGraphToll: GraphToll,
    toGraphToll: GraphToll,
    distance: Decimal,
  ) {
    this.fromGraphToll = fromGraphToll;
    this.toGraphToll = toGraphToll;
    this.distance = distance;
  }

  public fromGraphToll: GraphToll;
  public toGraphToll: GraphToll;
  public distance: Decimal;
}

function traverseFromNode(
  referenceNode: GraphToll,
  currentNode: GraphToll,
  savedSectionsSet: Set<GraphSection>,
  graphTollDistancesMap: Map<string, GraphTollDistance>,
  currentDistance: number = 0,
) {
  for (const section of currentNode.connectedSections) {
    const savedSection = savedSectionsSet.has(section);
    if (!savedSection) {
      savedSectionsSet.add(section);

      const nextNode =
        section.fromGraphToll !== currentNode
          ? section.fromGraphToll
          : section.toGraphToll;

      const existingGraphTollDistance =
        graphTollDistancesMap.get(`${referenceNode.id}||${nextNode.id}`) ||
        graphTollDistancesMap.get(`${nextNode.id}||${referenceNode.id}`);
      console.log(
        new GraphTollDistance(
          referenceNode,
          nextNode,
          new Decimal(currentDistance + section.distance.toNumber()),
        ),
      );
      if (!existingGraphTollDistance) {
        graphTollDistancesMap.set(
          `${referenceNode.id}||${nextNode.id}`,
          new GraphTollDistance(
            referenceNode,
            nextNode,
            new Decimal(currentDistance + section.distance.toNumber()),
          ),
        );
      }

      traverseFromNode(
        referenceNode,
        nextNode,
        savedSectionsSet,
        graphTollDistancesMap,
        currentDistance + section.distance.toNumber(),
      );
    }
  }
}

@Injectable()
export class TollDistanceService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async generateTollDistances(
    generateTollDistancesInput: IdInput,
  ): Promise<boolean> {
    return this.databaseService.$transaction(async (prisma) => {
      await prisma.tollDistance.deleteMany({
        where: {
          AND: [
            {
              fromToll: {
                tollNetwork: {
                  id: generateTollDistancesInput.id,
                },
              },
            },
            {
              toToll: {
                tollNetwork: {
                  id: generateTollDistancesInput.id,
                },
              },
            },
          ],
        },
      });
      const tolls = await prisma.toll.findMany({
        where: {
          tollNetworkId: generateTollDistancesInput.id,
        },
      });
      const sections = await prisma.section.findMany({
        where: {
          AND: [
            {
              fromToll: {
                tollNetwork: {
                  id: generateTollDistancesInput.id,
                },
              },
            },
            {
              toToll: {
                tollNetwork: {
                  id: generateTollDistancesInput.id,
                },
              },
            },
          ],
        },
      });
      const graphTolls = new Map<string, GraphToll>();
      for (const toll of tolls) {
        const graphToll = new GraphToll(toll);
        graphTolls.set(toll.id, graphToll);
      }

      const graphSections: GraphSection[] = sections.map((section) => {
        const fromGraphToll = graphTolls.get(section.fromTollId);
        const toGraphToll = graphTolls.get(section.toTollId);
        if (!fromGraphToll || !toGraphToll) {
          throw new Error();
        }
        const graphSection = new GraphSection(
          section,
          fromGraphToll,
          toGraphToll,
        );
        return graphSection;
      });

      for (const [, graphToll] of graphTolls) {
        const connectedSections = graphSections.filter(
          (graphSection) =>
            graphSection.fromGraphToll === graphToll ||
            graphSection.toGraphToll === graphToll,
        );
        graphToll.connectedSections = connectedSections;
      }

      const graphTollDistancesMap = new Map<string, GraphTollDistance>();

      for (const [, graphToll] of graphTolls) {
        const savedSections = new Set<GraphSection>();

        traverseFromNode(
          graphToll,
          graphToll,
          savedSections,
          graphTollDistancesMap,
        );
      }

      const insertionList: Prisma.TollDistanceCreateManyInput[] = [];
      console.log('--- list ---');
      graphTollDistancesMap.forEach((graphTollDistance) => {
        insertionList.push({
          distance: graphTollDistance.distance,
          fromTollId: graphTollDistance.fromGraphToll.id,
          toTollId: graphTollDistance.toGraphToll.id,
        });
        console.log(
          `${graphTollDistance.fromGraphToll.name} | ${graphTollDistance.toGraphToll.name} | ${graphTollDistance.distance} km`,
        );
      });
      await prisma.tollDistance.createMany({ data: insertionList });

      return true;
    });
  }

  public async tollDistanceList(
    tollDistanceListInput: TollDistanceListInput,
  ): Promise<TollDistanceListResult> {
    const whereQuery: Prisma.TollDistanceWhereInput = {
      fromToll: {
        tollNetworkId: tollDistanceListInput.id,
      },
      toToll: {
        tollNetworkId: tollDistanceListInput.id,
      },
    };
    const tollDistanceList = await this.databaseService.tollDistance.findMany({
      where: whereQuery,
      take: tollDistanceListInput.take,
      skip: tollDistanceListInput.skip,
    });
    const tollDistanceCount = await this.databaseService.tollDistance.count({
      where: whereQuery,
    });
    return {
      list: tollDistanceList as any[],
      count: tollDistanceCount,
    };
  }

  public async tollDistance(
    tollDistanceInput: TollDistanceInput,
  ): Promise<number> {
    const tollDistance =
      await this.databaseService.tollDistance.findFirstOrThrow({
        where: {
          OR: [
            {
              fromTollId: tollDistanceInput.fromTollId,
              toTollId: tollDistanceInput.toTollId,
            },
            {
              fromTollId: tollDistanceInput.toTollId,
              toTollId: tollDistanceInput.fromTollId,
            },
          ],
        },
      });
    return tollDistance.distance.toNumber();
  }
}
