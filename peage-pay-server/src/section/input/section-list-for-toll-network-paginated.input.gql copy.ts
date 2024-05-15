import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import { PaginationInput } from 'src/shared/graphql/pagination-input.gql';

@InputType()
export class SectionListForTollNetworkPaginatedInput extends PaginationInput {
  @Field()
  @IsUUID()
  public id: string;
}
