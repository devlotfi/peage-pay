import { Field, InputType } from '@nestjs/graphql';
import { AddCustomPriceInput } from './add-custom-price.input.gql';
import { LocalPrice } from './local-price';
import { TollDirectionType } from '../graphql/toll-direction.gql';

@InputType()
export class AddLocalCustomPriceInput
  extends AddCustomPriceInput
  implements LocalPrice
{
  @Field(() => TollDirectionType)
  public direction: TollDirectionType;
}
