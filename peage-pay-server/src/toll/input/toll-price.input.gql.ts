import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import { TollDirectionType } from 'src/price/graphql/toll-direction.gql';

@InputType()
export class TollPriceInput {
  @Field()
  @IsUUID()
  public tollId: string;

  @Field(() => TollDirectionType)
  public direction: TollDirectionType;
}
