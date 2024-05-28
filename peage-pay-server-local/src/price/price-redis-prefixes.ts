import { PriceListType } from './graphql/price-list.gql';
import { TollDirectionType } from './graphql/toll-direction.gql';

export class PriceRedisPrefixes {
  public static defaultPrice(): string {
    return `DEFAULT_PRICE`;
  }

  public static tollPriceGlobal(priceType: PriceListType): string {
    return `${priceType}_TOLL_PRICE_GLOBAL`;
  }

  public static tollPrice(
    tollId: string,
    direction: TollDirectionType,
    priceType: PriceListType,
  ): string {
    return `${priceType}_TOLL_PRICE_${direction}:${tollId}`;
  }
}
