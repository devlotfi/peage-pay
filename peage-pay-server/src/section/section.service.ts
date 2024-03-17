import { Injectable } from '@nestjs/common';
import { Prisma, Section, Toll, TollDistance } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { SectionListForTollInput } from './input/section-list-for-toll.input.gql';
import { GraphQLError } from 'graphql';
import { AddSectionInput } from './input/add-section.input.gql';
import { DeleteSectionInput } from './input/delete-section.input.gql';
import { SectionErrors } from './graphql/section-errors.gql';
import { SectionListForTollNetworkInput } from './input/section-list-for-toll-network.input.gql';
import { SectionListResult } from './result/section-list.result.gql';
import { EditSectionInput } from './input/edit-section-input.gql';

@Injectable()
export class SectionService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async sectionListForToll(
    sectionListForTollInput: SectionListForTollInput,
  ): Promise<SectionListResult> {
    const graphTollDistanceList = await this.databaseService.section.findMany({
      where: {
        OR: [
          {
            fromToll: {
              id: sectionListForTollInput.tollId,
            },
          },
          {
            toToll: {
              id: sectionListForTollInput.tollId,
            },
          },
        ],
      },
      take: sectionListForTollInput.take,
      skip: sectionListForTollInput.skip,
    });
    const graphTollDistanceCount = await this.databaseService.section.count({
      where: {
        OR: [
          {
            fromToll: {
              id: sectionListForTollInput.tollId,
            },
          },
          {
            toToll: {
              id: sectionListForTollInput.tollId,
            },
          },
        ],
      },
    });
    const sectionListResult = new SectionListResult();
    sectionListResult.list = graphTollDistanceList as any[];
    sectionListResult.count = graphTollDistanceCount;
    return sectionListResult;
  }

  public async sectionListForTollNetwork(
    sectionListForTollNetworkInput: SectionListForTollNetworkInput,
  ): Promise<TollDistance[]> {
    return await this.databaseService.section.findMany({
      where: {
        OR: [
          {
            fromToll: {
              tollNetwork: {
                id: sectionListForTollNetworkInput.tollNetworkId,
              },
            },
          },
          {
            toToll: {
              tollNetwork: {
                id: sectionListForTollNetworkInput.tollNetworkId,
              },
            },
          },
        ],
      },
    });
  }

  public async addSection(addSectionInput: AddSectionInput): Promise<Section> {
    try {
      const graphTollDistance = await this.databaseService.section.create({
        data: {
          fromToll: {
            connect: {
              id: addSectionInput.fromTollId,
            },
          },
          toToll: {
            connect: {
              id: addSectionInput.toTollId,
            },
          },
          status: addSectionInput.status,
          distance: addSectionInput.distance,
        },
      });
      return graphTollDistance;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new GraphQLError(SectionErrors.SECTION_EXISTS);
        }
      }
      throw error;
    }
  }

  public async editSection(
    editSectionInput: EditSectionInput,
  ): Promise<Section> {
    try {
      const graphTollDistance = await this.databaseService.section.update({
        data: {
          status: editSectionInput.status,
          distance: editSectionInput.distance,
        },
        where: {
          fromTollId_toTollId: {
            fromTollId: editSectionInput.fromTollId,
            toTollId: editSectionInput.toTollId,
          },
        },
      });
      return graphTollDistance;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new GraphQLError(SectionErrors.SECTION_EXISTS);
        }
      }
      throw error;
    }
  }

  public async deleteSection(
    deleteSectionInput: DeleteSectionInput,
  ): Promise<boolean> {
    await this.databaseService.section.delete({
      where: {
        fromTollId_toTollId: {
          fromTollId: deleteSectionInput.fromTollId,
          toTollId: deleteSectionInput.toTollId,
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
