import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TollDirectionType } from 'src/price/graphql/toll-direction.gql';

@ObjectType()
export class AutomaticGateType {
  @Field(() => ID)
  public id: string;

  @Field()
  public name: string;

  @Field(() => TollDirectionType)
  public direction: TollDirectionType;

  @Field()
  public tollId: string;

  @Field(() => Date)
  public createdAt: Date;

  @Field(() => Date)
  public updatedAt: Date;
}
