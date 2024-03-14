import { Injectable } from '@nestjs/common';
import { Wilaya } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { WilayaListInput } from './input/wilaya-list.input.gql';
import { WilayaByIdInput } from './input/wilaya-by-id.input.gql';

@Injectable()
export class WilayaService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async wilayaList(wilayaListInput: WilayaListInput): Promise<Wilaya[]> {
    if (
      wilayaListInput.idSearch ||
      wilayaListInput.nameSearch ||
      wilayaListInput.codeSearch
    ) {
      return await this.databaseService.wilaya.findMany({
        where: {
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
        },

        take: wilayaListInput.take,
        skip: wilayaListInput.skip,
      });
    } else {
      return await this.databaseService.wilaya.findMany({
        take: wilayaListInput.take,
        skip: wilayaListInput.skip,
      });
    }
  }

  public async wilayaById(
    wilayaByIdInput: WilayaByIdInput,
  ): Promise<Wilaya | null> {
    return await this.databaseService.wilaya.findUnique({
      where: {
        id: wilayaByIdInput.wilayaId,
      },
    });
  }
}
