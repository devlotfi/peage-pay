import { Field, ObjectType } from '@nestjs/graphql';
import { TollType } from 'src/toll/graphql/toll.gql';
import { BaseUserType } from './base-user.gql';

@ObjectType()
export class TollAdminType {
  @Field()
  public baseUserId: string;

  @Field(() => BaseUserType, { nullable: true })
  public baseUser?: BaseUserType;

  @Field({ nullable: true })
  public tollId?: string;

  @Field(() => TollType, { nullable: true })
  public toll?: TollType;
}
