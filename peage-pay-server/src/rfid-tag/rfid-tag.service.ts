import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { RfidTagListInput } from './input/rfid-tag-list.input.gql';
import { RfidTagListResult } from './result/rfid-tag-list.result.gql';
import { Prisma, RfidTag } from '@prisma/client';
import { AddRfidTagInput } from './input/add-rfid-tag.input.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';
import { RfidTagByRfidInput } from './input/rfid-tag-by-rfid.input.gql';

@Injectable()
export class RfidTagService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async rfidTagList(
    rfidTagListInput: RfidTagListInput,
  ): Promise<RfidTagListResult> {
    if (
      rfidTagListInput.idSearch ||
      rfidTagListInput.rfidSearch ||
      rfidTagListInput.registrationNumberSearch
    ) {
      const whereQuery: Prisma.RfidTagWhereInput = {
        baseUser: {
          id: rfidTagListInput.baseUserId,
        },
        OR: [
          {
            id: {
              contains: rfidTagListInput.idSearch,
              mode: 'insensitive',
            },
          },
          {
            rfid: {
              contains: rfidTagListInput.rfidSearch,
              mode: 'insensitive',
            },
          },
          {
            registrationNumber: {
              contains: rfidTagListInput.registrationNumberSearch,
              mode: 'insensitive',
            },
          },
        ],
      };
      const rfidTagList = await this.databaseService.rfidTag.findMany({
        where: whereQuery,
        take: rfidTagListInput.take,
        skip: rfidTagListInput.skip,
      });
      const rfidTagCount = await this.databaseService.rfidTag.count({
        where: whereQuery,
      });
      return {
        count: rfidTagCount,
        list: rfidTagList as any,
      };
    } else {
      const rfidTagList = await this.databaseService.rfidTag.findMany({
        where: {
          baseUser: {
            id: rfidTagListInput.baseUserId,
          },
        },
        take: rfidTagListInput.take,
        skip: rfidTagListInput.skip,
      });
      const rfidTagCount = await this.databaseService.rfidTag.count({
        where: {
          baseUser: {
            id: rfidTagListInput.baseUserId,
          },
        },
      });
      return {
        count: rfidTagCount,
        list: rfidTagList as any,
      };
    }
  }

  public async rfidTagByRfid(
    rfidTagByRfidInput: RfidTagByRfidInput,
  ): Promise<RfidTag | null> {
    return await this.databaseService.rfidTag.findUnique({
      where: {
        rfid: rfidTagByRfidInput.rfid,
      },
    });
  }

  public async addRfidTag(addRfidTagInput: AddRfidTagInput): Promise<RfidTag> {
    const rfidTag = await this.databaseService.rfidTag.create({
      data: {
        rfid: addRfidTagInput.rfid,
        registrationNumber: addRfidTagInput.registrationNumber,
        baseUser: {
          connect: {
            id: addRfidTagInput.baseUserId,
          },
        },
      },
    });
    return rfidTag;
  }

  public async deleteRfidTag(deleteRfidTagInput: IdInput): Promise<boolean> {
    await this.databaseService.rfidTag.delete({
      where: {
        id: deleteRfidTagInput.id,
      },
    });
    return true;
  }
}
