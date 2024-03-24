import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { ChangeRoleInput } from './input/change-role.input.gql';
import { ChangeTollInput } from './input/change-toll.input.gql';

@Injectable()
export class GateAdminService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async addGateAdminRole(
    changeRoleInput: ChangeRoleInput,
  ): Promise<boolean> {
    await this.databaseService.gateAdmin.create({
      data: {
        baseUserId: changeRoleInput.baseUserId,
      },
    });
    return true;
  }

  public async removeGateAdminRole(
    changeRoleInput: ChangeRoleInput,
  ): Promise<boolean> {
    await this.databaseService.gateAdmin.delete({
      where: {
        baseUserId: changeRoleInput.baseUserId,
      },
    });
    return true;
  }

  public async changeGateAdminToll(
    changeTollInput: ChangeTollInput,
  ): Promise<boolean> {
    await this.databaseService.gateAdmin.update({
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
