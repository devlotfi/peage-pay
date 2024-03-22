import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { DeletePriceInput } from './input/delete-price.input.gql';
import { GraphQLError } from 'graphql';
import { PriceErrors } from './graphql/price-errors.gql';
import { AccessTokenPayload } from 'src/auth/types/access-token-payload.type';
import { BaseUserErrors } from 'src/base-user/graphql/base-user-errors.gql';
import { TollAdminService } from './toll-admin.service';

@Injectable()
export class DeletePriceService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly tollAdminService: TollAdminService,
  ) {}

  public async deleteGlobalPrice(
    deletePriceInput: DeletePriceInput,
  ): Promise<boolean> {
    const price = await this.databaseService.price.findUnique({
      where: {
        id: deletePriceInput.priceId,
      },
    });
    if (!price) {
      throw new GraphQLError(PriceErrors.PRICE_NOT_FOUND);
    }
    if (price.tollId) {
      throw new GraphQLError(PriceErrors.CANNOT_DELETE_LOCAL_PRICE);
    }
    return await this.deletePrice(deletePriceInput);
  }

  public async deleteLocalPrice(
    deletePriceInput: DeletePriceInput,
    accessTokenPayload: AccessTokenPayload,
  ): Promise<boolean> {
    const price = await this.databaseService.price.findUnique({
      where: {
        id: deletePriceInput.priceId,
      },
    });
    if (!price) {
      throw new GraphQLError(PriceErrors.PRICE_NOT_FOUND);
    }
    if (!price.tollId) {
      throw new GraphQLError(PriceErrors.CANNOT_DELETE_GLOBAL_PRICE);
    }

    const tollAdminData =
      await this.tollAdminService.getTollAdminData(accessTokenPayload);
    if (tollAdminData.tollAdmin?.toll?.id !== price.tollId) {
      throw new GraphQLError(BaseUserErrors.INSUFFICIENT_PRIVILEGES);
    }

    return await this.deletePrice(deletePriceInput);
  }

  private async deletePrice(
    deletePriceInput: DeletePriceInput,
  ): Promise<boolean> {
    await this.databaseService.price.delete({
      where: {
        id: deletePriceInput.priceId,
      },
    });
    return true;
  }
}
