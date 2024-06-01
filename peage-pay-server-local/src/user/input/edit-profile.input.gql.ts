import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class EditProfileInput {
  @Field({ nullable: true })
  @Length(2, 256)
  public firstName?: string;

  @Field({ nullable: true })
  @Length(2, 256)
  public lastName?: string;
}
