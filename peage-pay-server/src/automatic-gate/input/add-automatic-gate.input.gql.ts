import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';
import { TollDirectionType } from 'src/price/graphql/toll-direction.gql';

@InputType()
export class AddAutomaticGateInput {
  @Field()
  @Length(1, 256)
  public name: string;

  @Field(() => TollDirectionType)
  public direction: TollDirectionType;

  @Field()
  @Length(1, 512)
  public password: string;
}
