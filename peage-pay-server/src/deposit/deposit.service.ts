import { Injectable } from '@nestjs/common';
import { Deposit } from '@prisma/client';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DepositService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async depositList(
    userAccessTokenPayload: UserAccessTokenPayload,
  ): Promise<Deposit[]> {
    return await this.databaseService.deposit.findMany({
      where: {
        baseUser: {
          id: userAccessTokenPayload.userId,
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
