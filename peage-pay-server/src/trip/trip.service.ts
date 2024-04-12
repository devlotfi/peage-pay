import { Injectable } from '@nestjs/common';
import { Trip } from '@prisma/client';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { DatabaseService } from 'src/database/database.service';

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
}
