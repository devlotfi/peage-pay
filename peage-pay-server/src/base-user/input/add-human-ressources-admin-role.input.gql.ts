import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AddHumanRessourcesAdminRoleInput {
  @Field()
  @IsUUID()
  public baseUserId: string;
}
