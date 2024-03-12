import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { GenerateTollDistancesInput } from './input/generate-toll-distances.input.gql';

@Injectable()
export class TollDistanceService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async generateTollDistances(
    generateTollDistancesInput: GenerateTollDistancesInput,
  ): Promise<boolean> {
    const tollDistances = this.databaseService.tollDistance.findMany({
      where: {
        fromToll: {
          tollNetwork: {
            id: generateTollDistancesInput.tollNetworkId,
          },
        },
        toToll: {
          tollNetwork: {
            id: generateTollDistancesInput.tollNetworkId,
          },
        },
      },
      include: {
        fromToll: true,
        toToll: true,
      },
    });

    return true;
  }
}
