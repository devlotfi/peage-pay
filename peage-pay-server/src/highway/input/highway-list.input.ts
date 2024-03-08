import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsPositive, Length, Max } from 'class-validator';
import { HighwaySearchFields } from '../graphql/highway-search-fields.graphql';
import { HighwayOrderByFields } from '../graphql/highway-order-by-fields.graphql';
import { SortMode } from 'src/shared/graphql/sort-mode.graphql';

@InputType()
export class HighwayListInput {
  @Field({ nullable: true })
  @Length(1, 1024)
  @IsOptional()
  public search?: string;

  @Field(() => HighwaySearchFields, { nullable: true })
  @IsOptional()
  public searchField?: HighwaySearchFields;

  @Field(() => HighwayOrderByFields, { nullable: true })
  @IsOptional()
  public orderByField?: HighwayOrderByFields;

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
