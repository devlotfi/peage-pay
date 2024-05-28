import { Field, ObjectType } from '@nestjs/graphql';
import { PaginationResult } from 'src/shared/graphql/pagination-result.gql';
import { RfidTagType } from '../graphql/rfid-tag.gql';

@ObjectType()
export class RfidTagListResult extends PaginationResult<RfidTagType> {
  @Field(() => [RfidTagType])
  public list: RfidTagType[];
}
