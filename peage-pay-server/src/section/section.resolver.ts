import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { SectionService } from './section.service';
import { UseGuards } from '@nestjs/common';
import { BaseUserRolesType } from 'src/user/graphql/base-user-roles.gql';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { SectionType } from './graphql/section.gql';
import { TollType } from 'src/toll/graphql/toll.gql';
import { AddSectionInput } from './input/add-section.input.gql';
import { DeleteSectionInput } from './input/delete-section.input.gql';
import { SectionListResult } from './result/section-list.result.gql';
import { EditSectionInput } from './input/edit-section-input.gql';
import { SectionByIdsInput } from './input/section-by-ids.input.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';
import { SectionListForTollInput } from './input/section-list-for-toll.input.gql';
import { TollService } from 'src/toll/toll.service';

@Resolver(() => SectionType)
export class SectionResolver {
  public constructor(
    private readonly sectionService: SectionService,
    private readonly tollService: TollService,
  ) {}

  @Query(() => SectionListResult)
  @UseGuards(AuthGuard)
  public async sectionListForToll(
    @Args('sectionListForTollInput')
    sectionListForTollInput: SectionListForTollInput,
  ) {
    return await this.sectionService.sectionListForToll(
      sectionListForTollInput,
    );
  }

  @Query(() => [SectionType])
  @UseGuards(AuthGuard)
  public async sectionListForTollNetwork(
    @Args('sectionListForTollNetworkInput')
    sectionListForTollNetworkInput: IdInput,
  ) {
    return await this.sectionService.sectionListForTollNetwork(
      sectionListForTollNetworkInput,
    );
  }

  @Query(() => SectionType, { nullable: true })
  @UseGuards(AuthGuard)
  public async sectionByIds(
    @Args('sectionByIdsInput')
    sectionByIdsInput: SectionByIdsInput,
  ) {
    return await this.sectionService.sectionByIds(sectionByIdsInput);
  }

  @Mutation(() => SectionType)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async addSection(
    @Args('addSectionInput')
    addSectionInput: AddSectionInput,
  ) {
    return await this.sectionService.addSection(addSectionInput);
  }

  @Mutation(() => SectionType)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async editSection(
    @Args('editSectionInput')
    editSectionInput: EditSectionInput,
  ) {
    return await this.sectionService.editSection(editSectionInput);
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async deleteSection(
    @Args('deleteSectionInput')
    deleteSectionInput: DeleteSectionInput,
  ) {
    return await this.sectionService.deleteSection(deleteSectionInput);
  }

  @ResolveField(() => TollType)
  public async fromToll(@Parent() section: SectionType) {
    return await this.tollService.tollById({ id: section.fromTollId });
  }

  @ResolveField(() => TollType)
  public async toToll(@Parent() section: SectionType) {
    return await this.tollService.tollById({ id: section.toTollId });
  }
}
