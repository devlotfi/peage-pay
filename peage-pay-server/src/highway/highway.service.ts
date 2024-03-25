import { Injectable } from '@nestjs/common';
import { Highway, Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { AddHighwayInput } from './input/add-highway.input.gql';
import { EditHighwayInput } from './input/edit-highway.input.gql';
import { HighwayListInput } from './input/highway-list.input.gql';
import { HighwayListResult } from './result/highway-list.result.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';

@Injectable()
export class HighwayService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async highwayList(
    highwayListInput: HighwayListInput,
  ): Promise<HighwayListResult> {
    if (
      highwayListInput.idSearch ||
      highwayListInput.nameSearch ||
      highwayListInput.codeSearch
    ) {
      const whereQuery: Prisma.HighwayWhereInput = {
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
      };
      const highwayList = await this.databaseService.highway.findMany({
        where: whereQuery,
        take: highwayListInput.take,
        skip: highwayListInput.skip,
      });
      const highwayCount = await this.databaseService.highway.count({
        where: whereQuery,
      });
      return {
        count: highwayCount,
        list: highwayList as any,
      };
    } else {
      const highwayList = await this.databaseService.highway.findMany({
        take: highwayListInput.take,
        skip: highwayListInput.skip,
      });
      const highwayCount = await this.databaseService.highway.count();
      return {
        count: highwayCount,
        list: highwayList as any,
      };
    }
  }

  public async highwayById(highwayByIdInput: IdInput): Promise<Highway | null> {
    return await this.databaseService.highway.findUnique({
      where: {
        id: highwayByIdInput.id,
      },
    });
  }

  public async addHighway(addHighwayInput: AddHighwayInput): Promise<Highway> {
    const highway = await this.databaseService.highway.create({
      data: {
        name: addHighwayInput.name,
        code: addHighwayInput.code,
      },
    });
    return highway;
  }

  public async editHighway(
    editHighwayInput: EditHighwayInput,
  ): Promise<Highway> {
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
  }

  public async deleteHighway(deleteHighwayInput: IdInput): Promise<boolean> {
    await this.databaseService.highway.delete({
      where: {
        id: deleteHighwayInput.id,
      },
    });
    return true;
  }
}
