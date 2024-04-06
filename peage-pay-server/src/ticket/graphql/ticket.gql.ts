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

  @Field(() => Date)
  public entryTimeStamp: Date;

  @Field({ nullable: true })
  public exitTollId?: string;

  @Field(() => TollType, { nullable: true })
  public exitToll?: TollType;

  @Field({ nullable: true })
  public exitTollPrice?: number;

  @Field(() => Date, { nullable: true })
  public exitTimeStamp?: Date;

  @Field({ nullable: true })
  public distance?: number;
}
