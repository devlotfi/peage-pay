import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class IdInput {
  @Field()
  @IsUUID()
  public id: string;
}
