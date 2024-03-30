import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { IdInput } from 'src/shared/graphql/id-input.gql';

@Injectable()
export class HumanRessourcesAdminService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async addHumanRessoucesAdminRole(
    changeRoleInput: IdInput,
  ): Promise<boolean> {
    await this.databaseService.humanRessourcesAdmin.create({
      data: {
        baseUserId: changeRoleInput.id,
      },
    });
    return true;
  }

  public async removeHumanRessoucesAdminRole(
    changeRoleInput: IdInput,
  ): Promise<boolean> {
    await this.databaseService.humanRessourcesAdmin.delete({
      where: {
        baseUserId: changeRoleInput.id,
      },
    });
    return true;
  }
}
