import { Injectable } from '@nestjs/common';
import { AutomaticGate, Prisma } from '@prisma/client';
import { AddAutomaticGateInput } from './input/add-automatic-gate.input.gql';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { DatabaseService } from 'src/database/database.service';
import { TollAdminService } from 'src/user/toll-admin.service';
import { GraphQLError } from 'graphql';
import { BaseUserErrors } from 'src/user/graphql/base-user-errors.gql';
import { Utils } from 'src/shared/utils';
import { EditAutomaticGateInput } from './input/edit-automatic-gate.input.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';
import { SignInAutomaticGateResult } from './result/sign-in-automatic-gate.result.gql';
import { SignInAutomaticGateInput } from './input/sign-in-automatic-gate.input.gql';
import { compare } from 'bcrypt';
import { AutomaticGateErrors } from './graphql/automatic-gate-errors.gql';
import { AutomaticGateTokenService } from 'src/token/automatic-gate-token.service';
import { Request, Response } from 'express';
import { AutomaticGateType } from './graphql/automatic-gate.gql';
import { TokenErrors } from 'src/token/graphql/token-errors.gql';
import { AutomaticGateListInput } from './input/automatic-gate-list.input.gql';
import { AutomaticGateListResult } from './result/automatic-gate-list.result.gql';

@Injectable()
export class AutomaticGateService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly tollAdminService: TollAdminService,
    private readonly automaticGateTokenService: AutomaticGateTokenService,
  ) {}

  private async getTollAdmin(userId: string) {
    const tollAdmin = await this.tollAdminService.tollAdminById({
      id: userId,
    });
    if (!tollAdmin || !tollAdmin.tollId) {
      throw new GraphQLError(BaseUserErrors.TOLL_NOT_ASSIGNED);
    }
    return tollAdmin;
  }

  private async checkTollAssignation(userId: string, automaticGateId: string) {
    const tollAdmin = await this.getTollAdmin(userId);
    const existingAutomaticGate =
      await this.databaseService.automaticGate.findUniqueOrThrow({
        where: {
          id: automaticGateId,
        },
      });
    if (existingAutomaticGate.tollId !== tollAdmin.tollId) {
      throw new GraphQLError(BaseUserErrors.INSUFFICIENT_PRIVILEGES);
    }

    return {
      tollAdmin,
      existingAutomaticGate,
    };
  }

  public async automaticGateList(
    automaticGateListInput: AutomaticGateListInput,
    accessTokenPayload: UserAccessTokenPayload,
  ): Promise<AutomaticGateListResult> {
    const tollAdmin = await this.getTollAdmin(accessTokenPayload.userId);

    if (automaticGateListInput.idSearch || automaticGateListInput.nameSearch) {
      const whereQuery: Prisma.AutomaticGateWhereInput = {
        toll: {
          id: tollAdmin.tollId!,
        },
        OR: [
          {
            id: {
              contains: automaticGateListInput.idSearch,
              mode: 'insensitive',
            },
          },
          {
            name: {
              contains: automaticGateListInput.nameSearch,
              mode: 'insensitive',
            },
          },
        ],
      };
      const automaticGateList =
        await this.databaseService.automaticGate.findMany({
          where: whereQuery,
          take: automaticGateListInput.take,
          skip: automaticGateListInput.skip,
        });
      const automaticGateCount = await this.databaseService.automaticGate.count(
        {
          where: whereQuery,
        },
      );
      return {
        count: automaticGateCount,
        list: automaticGateList as any,
      };
    } else {
      const automaticGateList =
        await this.databaseService.automaticGate.findMany({
          where: {
            toll: {
              id: tollAdmin.tollId!,
            },
          },
          take: automaticGateListInput.take,
          skip: automaticGateListInput.skip,
        });
      const automaticGateCount = await this.databaseService.automaticGate.count(
        {
          where: {
            toll: {
              id: tollAdmin.tollId!,
            },
          },
        },
      );
      return {
        count: automaticGateCount,
        list: automaticGateList as any,
      };
    }
  }

  public async automaticGateById(
    automaticGateByIdInput: IdInput,
  ): Promise<AutomaticGate | null> {
    return await this.databaseService.automaticGate.findUnique({
      where: {
        id: automaticGateByIdInput.id,
      },
    });
  }

  public async addAutomaticGate(
    addAutomaticGateInput: AddAutomaticGateInput,
    accessTokenPayload: UserAccessTokenPayload,
  ): Promise<AutomaticGate> {
    const tollAdmin = await this.getTollAdmin(accessTokenPayload.userId);

    const automaticGate = await this.databaseService.automaticGate.create({
      data: {
        name: addAutomaticGateInput.name,
        passwordHash: await Utils.hashString(addAutomaticGateInput.password),
        toll: {
          connect: {
            id: tollAdmin.tollId!,
          },
        },
      },
    });
    return automaticGate;
  }

  public async editAutomaticGate(
    editAutomaticGateInput: EditAutomaticGateInput,
    accessTokenPayload: UserAccessTokenPayload,
  ) {
    await this.checkTollAssignation(
      accessTokenPayload.userId,
      editAutomaticGateInput.automaticGateId,
    );
    const automaticGate = await this.databaseService.automaticGate.update({
      data: {
        name: editAutomaticGateInput.name,
        passwordHash: editAutomaticGateInput.password
          ? await Utils.hashString(editAutomaticGateInput.password)
          : undefined,
      },
      where: {
        id: editAutomaticGateInput.automaticGateId,
      },
    });
    return automaticGate;
  }

  public async deleteAutomaticGate(
    deleteAutomaticGateInput: IdInput,
    accessTokenPayload: UserAccessTokenPayload,
  ): Promise<boolean> {
    await this.checkTollAssignation(
      accessTokenPayload.userId,
      deleteAutomaticGateInput.id,
    );
    await this.databaseService.automaticGate.delete({
      where: {
        id: deleteAutomaticGateInput.id,
      },
    });
    return true;
  }

  public async signInAutomaticGate(
    signInAutomaticGateInput: SignInAutomaticGateInput,
    req: Request,
    res: Response,
  ): Promise<SignInAutomaticGateResult> {
    const automaticGate =
      await this.databaseService.automaticGate.findUniqueOrThrow({
        where: {
          name: signInAutomaticGateInput.name,
        },
      });
    const result = await compare(
      signInAutomaticGateInput.password,
      automaticGate.passwordHash,
    );
    if (!result) {
      throw new GraphQLError(AutomaticGateErrors.INVALID_NAME_OR_PASSWORD);
    }

    await this.automaticGateTokenService.generateRefreshToken(
      automaticGate.id,
      req,
      res,
    );
    const accessToken =
      await this.automaticGateTokenService.generateAccessToken(
        automaticGate.id,
      );

    return {
      accessToken,
      automaticGate: automaticGate as AutomaticGateType,
    };
  }

  public async signInAutomaticRefreshToken(
    req: Request,
    res: Response,
  ): Promise<SignInAutomaticGateResult> {
    const { payload, refreshToken, valid } =
      await this.automaticGateTokenService.checkRefreshTokenCookie(req, res);
    if (!refreshToken) {
      throw new GraphQLError(TokenErrors.REFRESH_TOKEN_NOT_PROVIDED);
    }
    if (!valid || !payload) {
      throw new GraphQLError(TokenErrors.INVALID_REFRESH_TOKEN);
    }

    const automaticGateId: string = payload.automaticGateId;
    const automaticGate =
      await this.databaseService.automaticGate.findUniqueOrThrow({
        where: {
          id: automaticGateId,
        },
      });

    const accessToken =
      await this.automaticGateTokenService.generateAccessToken(automaticGateId);

    return {
      accessToken,
      automaticGate: automaticGate as any,
    };
  }

  public async signOutAutomaticGate() {}
}
