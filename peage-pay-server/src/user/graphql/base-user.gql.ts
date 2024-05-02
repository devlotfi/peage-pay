import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseUserRolesType } from './base-user-roles.gql';
import { TripType } from 'src/trip/graphql/trip.gql';

@ObjectType()
export class BaseUserType {
  @Field(() => ID)
  public id: string;

  @Field()
  public firstName: string;

  @Field()
  public lastName: string;

  @Field()
  public createdAt: Date;

  @Field()
  public updatedAt: Date;

  @Field(() => [BaseUserRolesType])
  public roles: BaseUserRolesType[];

  @Field({ nullable: true })
  public currentTripId?: string;

  @Field(() => TripType, { nullable: true })
  public currentTrip?: TripType;
}
