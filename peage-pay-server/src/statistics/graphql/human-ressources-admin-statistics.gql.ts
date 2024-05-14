import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HumanRessourcesAdminStatistics {
  @Field()
  public userCount: number;

  @Field()
  public tollAdminCount: number;

  @Field()
  public gateAdminCount: number;

  @Field()
  public moderatorCount: number;
}
