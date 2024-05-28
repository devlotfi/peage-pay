import { Field, ObjectType } from '@nestjs/graphql';
import { TollType } from 'src/toll/graphql/toll.gql';

@ObjectType()
export class TollDistanceType {
  @Field()
  public fromTollId: string;

  @Field(() => TollType)
  public fromToll: TollType;

  @Field()
  public toTollId: string;

  @Field(() => TollType)
  public toToll: TollType;

  @Field()
  public distance: number;
}
