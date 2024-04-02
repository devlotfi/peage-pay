import { Field, InputType } from '@nestjs/graphql';
import { LocalPrice } from './local-price';
import { TollDirectionType } from '../graphql/toll-direction.gql';
import { AddWeeklyPriceInput } from './add-weekly-price.input.gql';

@InputType()
export class AddLocalWeeklyPriceInput
  extends AddWeeklyPriceInput
  implements LocalPrice
{
  @Field(() => TollDirectionType)
  public direction: TollDirectionType;
}
