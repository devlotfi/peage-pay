import { InputType } from '@nestjs/graphql';
import { AddPriceBaseInput } from './add-price-base.input.gql';

@InputType()
export class AddDailyPriceInput extends AddPriceBaseInput {}
