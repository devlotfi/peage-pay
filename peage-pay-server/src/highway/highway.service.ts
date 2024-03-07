import { Injectable } from '@nestjs/common';
import { Highway, Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { AddHighwayInput } from './input/add-highway.input';
import { EditHighwayInput } from './input/edit-highway.input';
import { DeleteHighwayInput } from './input/delete-highway.input';
import { GraphQLError } from 'graphql';
import { UserErrors } from 'src/user/graphql/user-errors.graphql';

@Injectable()
export class HighwayService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async highways(): Promise<Highway[]> {
    return await this.databaseService.highway.findMany();
  }

  public async addHighway(addHighwayInput: AddHighwayInput): Promise<Highway> {
    try {
      const highway = await this.databaseService.highway.create({
        data: {
          name: addHighwayInput.name,
          code: addHighwayInput.code,
        },
      });

      return highway;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new GraphQLError(UserErrors.USER_WITH_EMAIL_EXISTS);
        }
      }
      throw error;
    }
  }

  public async editHighway(
    editHighwayInput: EditHighwayInput,
  ): Promise<Highway> {
    try {
      const highway = await this.databaseService.highway.update({
        data: {
          name: editHighwayInput.name,
          code: editHighwayInput.code,
        },
        where: {
          id: editHighwayInput.highwayId,
        },
      });

      return highway;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new GraphQLError(UserErrors.USER_WITH_EMAIL_EXISTS);
        }
      }
      throw error;
    }
  }

  public async deleteHighway(
    deleteHighwayInput: DeleteHighwayInput,
  ): Promise<boolean> {
    try {
      await this.databaseService.highway.delete({
        where: {
          id: deleteHighwayInput.highwayId,
        },
      });
      return true;
    } catch (error) {
      throw error;
    }
  }
}
