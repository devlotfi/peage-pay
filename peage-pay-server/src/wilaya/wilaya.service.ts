import { Injectable } from '@nestjs/common';
import { Wilaya } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class WilayaService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async wilayaList(): Promise<Wilaya[]> {
    return await this.databaseService.wilaya.findMany();
  }
}
