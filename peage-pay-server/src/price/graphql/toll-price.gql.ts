import { Field, ObjectType } from '@nestjs/graphql';
import { TollDirectionType } from './toll-direction.gql';

@ObjectType()
export class TollPriceType {
  @Field()
  public tollId: string;

  @Field()
  public priceId: string;

  @Field(() => TollDirectionType)
  public direction: TollDirectionType;
}
