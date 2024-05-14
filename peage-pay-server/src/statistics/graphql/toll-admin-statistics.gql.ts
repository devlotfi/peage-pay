import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TollAdminStatistics {
  @Field()
  public automaticGateCount: number;

  @Field()
  public ticketPrinterCount: number;

  @Field()
  public rfidReaderCount: number;

  @Field()
  public qrCodeReaderCount: number;

  @Field()
  public localGateAdminCount: number;
}
