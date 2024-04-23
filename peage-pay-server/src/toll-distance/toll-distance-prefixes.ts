export class TollDistanceRedisPrefixes {
  public static tollDistance(fromTollId: string, toTollId: string): string {
    return `TOLL_DISTANCE:${fromTollId}||${toTollId}`;
  }
}
