import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { ChangeRoleInput } from './input/change-role.input.gql';

@Injectable()
export class ModeratorService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async addModeratorRole(
    changeRoleInput: ChangeRoleInput,
  ): Promise<boolean> {
    await this.databaseService.moderator.create({
      data: {
        baseUserId: changeRoleInput.baseUserId,
      },
    });
    return true;
  }

  public async removeModeratorRole(
    changeRoleInput: ChangeRoleInput,
  ): Promise<boolean> {
    await this.databaseService.moderator.delete({
      where: {
        baseUserId: changeRoleInput.baseUserId,
      },
    });
    return true;
  }
}
