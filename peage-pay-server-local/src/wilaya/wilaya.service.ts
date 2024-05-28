import { Injectable } from '@nestjs/common';
import { Prisma, Wilaya } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { WilayaListInput } from './input/wilaya-list.input.gql';
import { WilayaListResult } from './result/wilaya-list.result.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';

@Injectable()
export class WilayaService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async wilayaList(
    wilayaListInput: WilayaListInput,
  ): Promise<WilayaListResult> {
    if (
      wilayaListInput.idSearch ||
      wilayaListInput.nameSearch ||
      wilayaListInput.codeSearch
    ) {
      const whereQuery: Prisma.WilayaWhereInput = {
        OR: [
          {
            id: {
              contains: wilayaListInput.idSearch,
              mode: 'insensitive',
            },
          },
          {
            name: {
              contains: wilayaListInput.nameSearch,
              mode: 'insensitive',
            },
          },
          {
            code: {
              contains: wilayaListInput.codeSearch,
              mode: 'insensitive',
            },
          },
        ],
      };
      const wilayaList = await this.databaseService.wilaya.findMany({
        where: whereQuery,
        take: wilayaListInput.take,
        skip: wilayaListInput.skip,
      });
      const wilayaCount = await this.databaseService.wilaya.count({
        where: whereQuery,
      });
      return {
        count: wilayaCount,
        list: wilayaList as any,
      };
    } else {
      const wilayaList = await this.databaseService.wilaya.findMany({
        take: wilayaListInput.take,
        skip: wilayaListInput.skip,
      });
      const wilayaCount = await this.databaseService.wilaya.count();
      return {
        count: wilayaCount,
        list: wilayaList as any,
      };
    }
  }

  public async wilayaById(wilayaByIdInput: IdInput): Promise<Wilaya | null> {
    return await this.databaseService.wilaya.findUnique({
      where: {
        id: wilayaByIdInput.id,
      },
    });
  }
}
