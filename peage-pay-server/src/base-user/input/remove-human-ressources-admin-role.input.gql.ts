import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class RemoveHumanRessourcesAdminRoleInput {
  @Field()
  @IsUUID()
  public baseUserId: string;
}
