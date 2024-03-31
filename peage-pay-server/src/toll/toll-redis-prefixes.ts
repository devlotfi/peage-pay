export class TollRedisPrefixes {
  public static tollPrice(tollId: string): string {
    return `TOLL_PRICE:${tollId}`;
  }
}
