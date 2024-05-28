import { Field, InputType } from '@nestjs/graphql';
import { LocalPrice } from './local-price';
import { TollDirectionType } from '../graphql/toll-direction.gql';
import { AddMonthlyPriceInput } from './add-monthly-price.input.gql';

@InputType()
export class AddLocalMonthlyPriceInput
  extends AddMonthlyPriceInput
  implements LocalPrice
{
  @Field(() => TollDirectionType)
  public direction: TollDirectionType;
}
