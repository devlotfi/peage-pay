import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TollType } from 'src/toll/graphql/toll.gql';

@ObjectType()
export class TicketType {
  @Field(() => ID)
  public id: string;

  @Field()
  public entryTollId: string;

  @Field(() => TollType)
  public entryToll: TollType;

  @Field()
  public entryTollPrice: number;

  @Field({ nullable: true })
  public exitTollId?: string;

  @Field(() => TollType, { nullable: true })
  public exitToll?: TollType;

  @Field({ nullable: true })
  public exitTollPrice?: number;

  @Field({ nullable: true })
  public distance?: number;
}
