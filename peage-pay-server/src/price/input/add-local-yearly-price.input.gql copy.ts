import { Field, InputType } from '@nestjs/graphql';
import { LocalPrice } from './local-price';
import { TollDirectionType } from '../graphql/toll-direction.gql';
import { AddYearlyPriceInput } from './add-yearly-price.input.gql';

@InputType()
export class AddLocalYearlyPriceInput
  extends AddYearlyPriceInput
  implements LocalPrice
{
  @Field(() => TollDirectionType)
  public direction: TollDirectionType;
}
