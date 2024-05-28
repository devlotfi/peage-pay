import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { DatabaseService } from 'src/database/database.service';
import { Utils } from 'src/shared/utils';
import { RedeemCodeInput } from './input/redeem-code.input.gql';

@Injectable()
export class CodeService {
  public constructor(private readonly databaseService: DatabaseService) {}

  private generateCode() {
    const tokenLength = 16;
    const size = Math.floor(tokenLength / 2);
    const code = randomBytes(size).toString('hex');
    return code;
  }

  public async generateCodes(): Promise<string[]> {
    const codes: string[] = [];
    for (let i = 0; i < 20; i++) {
      codes.push(this.generateCode());
    }

    await this.databaseService.code.createMany({
      data: await Promise.all(
        codes.map(async (code) => ({
          value: 500,
          codeHash: await Utils.hashStringStatic(code),
        })),
      ),
    });

    return codes;
  }

  public async redeemCode(
    redeemCodeInput: RedeemCodeInput,
    userAccessTokenPayload: UserAccessTokenPayload,
  ): Promise<boolean> {
    return this.databaseService.$transaction(async (prisma) => {
      const code = await prisma.code.findUniqueOrThrow({
        where: {
          codeHash: await Utils.hashStringStatic(redeemCodeInput.code),
        },
      });

      await prisma.user.update({
        data: {
          balance: {
            increment: code.value,
          },
        },
        where: {
          baseUserId: userAccessTokenPayload.userId,
        },
      });
      await prisma.deposit.create({
        data: {
          amount: code.value,
          baseUser: {
            connect: {
              id: userAccessTokenPayload.userId,
            },
          },
        },
      });

      await prisma.code.delete({
        where: {
          id: code.id,
        },
      });
      return true;
    });
  }
}
