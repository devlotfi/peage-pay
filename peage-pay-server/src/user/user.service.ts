import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { DatabaseService } from 'src/database/database.service';
import { DefinePinInput } from './input/define-pin.input.gql';
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

  public async definePin(
    definePinInput: DefinePinInput,
    userAccessTokenPayload: UserAccessTokenPayload,
  ): Promise<boolean> {
    await this.databaseService.user.update({
      data: {
        pinHash: await Utils.hashString(definePinInput.pin),
      },
      where: {
        baseUserId: userAccessTokenPayload.userId,
      },
    });
    return true;
  }
}
