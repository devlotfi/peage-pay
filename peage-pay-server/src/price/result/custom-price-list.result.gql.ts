import { Field, ObjectType } from '@nestjs/graphql';
import { CustomPriceType } from '../graphql/custom-price.gql';
import { PaginationResult } from 'src/shared/graphql/pagination-result.gql';

@ObjectType()
export class CustomPriceListResult extends PaginationResult<CustomPriceType> {
  @Field(() => [CustomPriceType])
  public list: CustomPriceType[];
}
