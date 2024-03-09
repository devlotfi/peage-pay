import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsUUID, Length } from 'class-validator';

@InputType()
export class EditTollNetworkInput {
  @Field()
  @IsUUID()
  public tollNetworkId: string;

  @Field({ nullable: true })
  @Length(1, 256)
  @IsOptional()
  public name?: string;
}
