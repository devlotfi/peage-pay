import { Injectable } from '@nestjs/common';
import { Trip } from '@prisma/client';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { DatabaseService } from 'src/database/database.service';
import { IdInput } from 'src/shared/graphql/id-input.gql';

@Injectable()
export class TripService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async tripList(
    userAccessTokenPayload: UserAccessTokenPayload,
  ): Promise<Trip[]> {
    return await this.databaseService.trip.findMany({
      where: {
        baseUser: {
          id: userAccessTokenPayload.userId,
        },
      },
    });
  }

  public async tripById(tripByIdInput: IdInput): Promise<Trip | null> {
    return await this.databaseService.trip.findUnique({
      where: {
        id: tripByIdInput.id,
      },
    });
  }
}
