import { Field, ObjectType } from '@nestjs/graphql';
import { AutomaticGateType } from '../graphql/automatic-gate.gql';

@ObjectType()
export class SignInAutomaticGateResult {
  @Field(() => AutomaticGateType)
  public automaticGate: AutomaticGateType;

  @Field()
  public refreshToken: string;

  @Field()
  public accessToken: string;
}
