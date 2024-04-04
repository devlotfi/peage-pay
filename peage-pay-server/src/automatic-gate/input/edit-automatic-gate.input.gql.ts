import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsUUID, Length } from 'class-validator';
import { TollDirectionType } from 'src/price/graphql/toll-direction.gql';
import { AutomaticGateVariantType } from '../graphql/automatic-gate-variant.gql';

@InputType()
export class EditAutomaticGateInput {
  @Field()
  @IsUUID()
  public automaticGateId: string;

  @Field({ nullable: true })
  @Length(1, 256)
  @IsOptional()
  public name?: string;

  @Field(() => TollDirectionType, { nullable: true })
  public direction?: TollDirectionType;

  @Field(() => AutomaticGateVariantType, { nullable: true })
  public variant?: AutomaticGateVariantType;

  @Field({ nullable: true })
  @Length(7, 50)
  @IsOptional()
  public password?: string;
}
