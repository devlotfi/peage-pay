import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SignUpWithPhoneResult {
  @Field()
  public userId: string;
}
