import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { BaseUserErrors } from './graphql/base-user-errors.gql';
import { Prisma } from '@prisma/client';
import { AddHumanRessourcesAdminRoleInput } from './input/add-human-ressources-admin-role.input.gql';
import { GraphQLError } from 'graphql';
import { RemoveHumanRessourcesAdminRoleInput } from './input/remove-human-ressources-admin-role.input.gql';

@Injectable()
export class HumanRessourceAdminService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async addHumanRessoucesAdminRole(
    addHumanRessoucesAdminRoleInput: AddHumanRessourcesAdminRoleInput,
  ): Promise<boolean> {
    try {
      await this.databaseService.humanRessourcesAdmin.create({
        data: {
          baseUserId: addHumanRessoucesAdminRoleInput.baseUserId,
        },
      });
      return true;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new GraphQLError(
            BaseUserErrors.HUMAN_RESSOURCES_ADMIN_ROLE_ALREADY_ASSIGNED,
          );
        }
      }
      throw error;
    }
  }

  public async removeHumanRessoucesAdminRole(
    removeHumanRessoucesAdminRoleInput: RemoveHumanRessourcesAdminRoleInput,
  ): Promise<boolean> {
    await this.databaseService.humanRessourcesAdmin.delete({
      where: {
        baseUserId: removeHumanRessoucesAdminRoleInput.baseUserId,
      },
    });
    return true;
  }
}
