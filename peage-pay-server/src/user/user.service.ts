import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { randomBytes } from 'crypto';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { DatabaseService } from 'src/database/database.service';
import { Utils } from 'src/shared/utils';

@Injectable()
export class UserService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async userInfo(
    userAccessTokenPayload: UserAccessTokenPayload,
  ): Promise<User> {
    return await this.databaseService.user.findUniqueOrThrow({
      where: {
        baseUserId: userAccessTokenPayload.userId,
      },
    });
  }

  private generatePinString(): string {
    const tokenLength = 128;
    const size = Math.floor(tokenLength / 2);
    const token = randomBytes(size).toString('hex');
    return token;
  }

  public async generatePin(
    userAccessTokenPayload: UserAccessTokenPayload,
  ): Promise<string> {
    const pin = this.generatePinString();
    await this.databaseService.user.update({
      data: {
        pinHash: await Utils.hashString(pin),
      },
      where: {
        baseUserId: userAccessTokenPayload.userId,
      },
    });
    return pin;
  }
}
