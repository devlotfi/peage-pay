import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class PaginationResult<T> {
  public abstract list: T[];

  @Field()
  public count: number;
}
