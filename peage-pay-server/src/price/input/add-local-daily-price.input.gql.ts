import { Field, InputType } from '@nestjs/graphql';
import { LocalPrice } from './local-price';
import { TollDirectionType } from '../graphql/toll-direction.gql';
import { AddDailyPriceInput } from './add-daily-price.input.gql';

@InputType()
export class AddLocalDailyPriceInput
  extends AddDailyPriceInput
  implements LocalPrice
{
  @Field(() => TollDirectionType)
  public direction: TollDirectionType;
}
