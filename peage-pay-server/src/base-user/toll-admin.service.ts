import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { ChangeRoleInput } from './input/change-role.input.gql';
import { ChangeTollInput } from './input/change-toll.input.gql';

@Injectable()
export class TollAdminService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async addTollAdminRole(
    changeRoleInput: ChangeRoleInput,
  ): Promise<boolean> {
    await this.databaseService.tollAdmin.create({
      data: {
        baseUserId: changeRoleInput.baseUserId,
      },
    });
    return true;
  }

  public async removeTollAdminRole(
    changeRoleInput: ChangeRoleInput,
  ): Promise<boolean> {
    await this.databaseService.tollAdmin.delete({
      where: {
        baseUserId: changeRoleInput.baseUserId,
      },
    });
    return true;
  }

  public async changeTollAdminToll(
    changeTollInput: ChangeTollInput,
  ): Promise<boolean> {
    await this.databaseService.tollAdmin.update({
      data: {
        toll: {
          connect: {
            id: changeTollInput.tollId,
          },
        },
      },
      where: {
        baseUserId: changeTollInput.baseUserId,
      },
    });
    return true;
  }
}
