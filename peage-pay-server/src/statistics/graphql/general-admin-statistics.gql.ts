import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class GeneralAdminStatistics {
  @Field()
  public highwayCount: number;

  @Field()
  public tollNetworksCount: number;

  @Field()
  public subscriptionsCount: number;

  @Field()
  public humanRessourcesAdminCount: number;
}