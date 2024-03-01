import { Field, InputType } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';

@InputType()
export class SignInWithGoogleInput {
  @Field()
  @IsString()
  @Length(1, 4096)
  public token: string;
}
