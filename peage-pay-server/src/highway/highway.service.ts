import { Injectable } from '@nestjs/common';
import { Highway } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { AddHighwayInput } from './input/add-highway.input.gql';
import { EditHighwayInput } from './input/edit-highway.input.gql';
import { DeleteHighwayInput } from './input/delete-highway.input.gql';
import { HighwayListInput } from './input/highway-list.input.gql';
import { HighwayByIdInput } from './input/highway-by-id.input.gql';
import { HighwayListResult } from './result/highway-list.result.gql';

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
      const highwayList = await this.databaseService.highway.findMany({
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
      const highwayCount = await this.databaseService.highway.count({
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
      });
      const highwayListResult = new HighwayListResult();
      highwayListResult.list = highwayList as any[];
      highwayListResult.count = highwayCount;
      return highwayListResult;
    } else {
      const highwayList = await this.databaseService.highway.findMany({
        take: highwayListInput.take,
        skip: highwayListInput.skip,
      });
      const highwayCount = await this.databaseService.highway.count();
      const highwayListResult = new HighwayListResult();
      highwayListResult.list = highwayList as any[];
      highwayListResult.count = highwayCount;
      return highwayListResult;
    }
  }

  public async highwayById(
    highwayByIdInput: HighwayByIdInput,
  ): Promise<Highway | null> {
    return await this.databaseService.highway.findUnique({
      where: {
        id: highwayByIdInput.highwayId,
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
