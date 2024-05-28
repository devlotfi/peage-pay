import { Field, InputType } from '@nestjs/graphql';
import { IsUUID, Length } from 'class-validator';

@InputType()
export class ResetPasswordInput {
  @Field()
  @IsUUID()
  public userId: string;

  @Field()
  @Length(7, 256)
  public token: string;

  @Field()
  @Length(7, 512)
  public password: string;
}
