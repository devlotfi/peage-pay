import { Field, ObjectType } from '@nestjs/graphql';
import { TollType } from 'src/toll/graphql/toll.gql';
import { SectionStatusType } from './section-status.gql';

@ObjectType()
export class SectionType {
  @Field()
  public fromTollId: string;

  @Field(() => TollType)
  public fromToll: TollType;

  @Field()
  public toTollId: string;

  @Field(() => TollType)
  public toToll: TollType;

  @Field(() => SectionStatusType)
  public fromStatus: SectionStatusType;

  @Field(() => SectionStatusType)
  public toStatus: SectionStatusType;

  @Field()
  public distance: number;
}
