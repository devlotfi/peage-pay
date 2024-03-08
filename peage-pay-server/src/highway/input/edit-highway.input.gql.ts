import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsUUID, Length } from 'class-validator';

@InputType()
export class EditHighwayInput {
  @Field()
  @IsUUID()
  public highwayId: string;

  @Field({ nullable: true })
  @Length(1, 256)
  @IsOptional()
  public name?: string;

  @Field({ nullable: true })
  @Length(1, 50)
  @IsOptional()
  public code?: string;
}
