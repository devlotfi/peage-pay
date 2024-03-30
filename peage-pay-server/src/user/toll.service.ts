import { Injectable } from '@nestjs/common';
import { Toll } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TollService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async toll(tollId: string | undefined): Promise<Toll | null> {
    if (!tollId) {
      return null;
    }
    return await this.databaseService.toll.findUnique({
      where: {
        id: tollId,
      },
    });
  }
}
