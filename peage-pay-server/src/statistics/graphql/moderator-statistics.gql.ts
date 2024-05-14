import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ModeratorStatistics {
  @Field()
  public userCount: number;

  @Field()
  public rfidTagCount: number;
}
