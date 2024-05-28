import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseUserType } from 'src/user/graphql/base-user.gql';

@ObjectType()
export class RfidTagType {
  @Field(() => ID)
  public id: string;

  @Field()
  public rfid: string;

  @Field()
  public registrationNumber: string;

  @Field()
  public baseUserId: string;

  @Field(() => BaseUserType)
  public baseUser: BaseUserType;

  @Field(() => Date)
  public createdAt: Date;

  @Field(() => Date)
  public updatedAt: Date;
}
