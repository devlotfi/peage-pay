import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsPositive, Length, Max } from 'class-validator';
import { SubscriptionSearchFields } from '../graphql/subscription-search-fields.graphql';
import { SubscriptionOrderByFields } from '../graphql/subscription-order-by-fields.graphql';
import { SortMode } from 'src/shared/graphql/sort-mode.graphql';

@InputType()
export class SubscriptionListInput {
  @Field({ nullable: true })
  @Length(1, 1024)
  @IsOptional()
  public search?: string;

  @Field(() => SubscriptionSearchFields, { nullable: true })
  @IsOptional()
  public searchField?: SubscriptionSearchFields;

  @Field(() => SubscriptionOrderByFields, { nullable: true })
  @IsOptional()
  public orderByField?: SubscriptionOrderByFields;

  @Field(() => SortMode, { nullable: true })
  @IsOptional()
  public sortMode?: SortMode;

  @Field()
  @IsOptional()
  @Max(10)
  @IsPositive()
  public take: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsPositive()
  public skip?: number;
}
