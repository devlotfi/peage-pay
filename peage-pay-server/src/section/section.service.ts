import { Injectable } from '@nestjs/common';
import { Section, Toll, TollDistance } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { SectionListForTollInput } from './input/section-list-for-toll.input.gql';
import { AddSectionInput } from './input/add-section.input.gql';
import { DeleteSectionInput } from './input/delete-section.input.gql';
import { SectionListForTollNetworkInput } from './input/section-list-for-toll-network.input.gql';
import { SectionListResult } from './result/section-list.result.gql';
import { EditSectionInput } from './input/edit-section-input.gql';
import { SectionByIdsInput } from './input/section-by-ids.input.gql';

@Injectable()
export class SectionService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async sectionListForToll(
    sectionListForTollInput: SectionListForTollInput,
  ): Promise<SectionListResult> {
    const sectionList = await this.databaseService.section.findMany({
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
    const sectionCount = await this.databaseService.section.count({
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
    return {
      count: sectionCount,
      list: sectionList as any,
    };
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

  public async sectionByIds(
    sectionByIdsInput: SectionByIdsInput,
  ): Promise<Section | null> {
    return await this.databaseService.section.findUnique({
      where: {
        fromTollId_toTollId: {
          fromTollId: sectionByIdsInput.fromTollId,
          toTollId: sectionByIdsInput.toTollId,
        },
      },
    });
  }

  public async addSection(addSectionInput: AddSectionInput): Promise<Section> {
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
  }

  public async editSection(
    editSectionInput: EditSectionInput,
  ): Promise<Section> {
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
