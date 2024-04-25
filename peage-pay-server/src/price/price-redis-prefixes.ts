export class PriceRedisPrefixes {
  public static defaultPrice(): string {
    return `DEFAULT_PRICE`;
  }

  public static tollPriceInbound(tollId: string): string {
    return `TOLL_PRICE_INBOUND:${tollId}`;
  }

  public static tollPriceOutbound(tollId: string): string {
    return `TOLL_PRICE_OUTBOUND:${tollId}`;
  }
}
