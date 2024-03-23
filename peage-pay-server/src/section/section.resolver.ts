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
import { BaseUserRolesType } from 'src/base-user/graphql/base-user-roles.gql';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { SectionType } from './graphql/section.gql';
import { SectionListForTollInput } from './input/section-list-for-toll.input.gql';
import { TollType } from 'src/toll/graphql/toll.gql';
import { AddSectionInput } from './input/add-section.input.gql';
import { DeleteSectionInput } from './input/delete-section.input.gql';
import { SectionListForTollNetworkInput } from './input/section-list-for-toll-network.input.gql';
import { SectionListResult } from './result/section-list.result.gql';
import { EditSectionInput } from './input/edit-section-input.gql';
import { SectionByIdsInput } from './input/section-by-ids.input.gql';

@Resolver(() => SectionType)
export class SectionResolver {
  public constructor(private readonly sectionService: SectionService) {}

  @Query(() => SectionListResult)
  @UseGuards(AuthGuard)
  public async sectionListForToll(
    @Args('sectionListForTollInput')
    sectionListForTollInput: SectionListForTollInput,
  ): Promise<SectionListResult> {
    return await this.sectionService.sectionListForToll(
      sectionListForTollInput,
    );
  }

  @Query(() => [SectionType])
  @UseGuards(AuthGuard)
  public async sectionListForTollNetwork(
    @Args('sectionListForTollNetworkInput')
    sectionListForTollNetworkInput: SectionListForTollNetworkInput,
  ): Promise<SectionType[]> {
    return (await this.sectionService.sectionListForTollNetwork(
      sectionListForTollNetworkInput,
    )) as any;
  }

  @Query(() => SectionType, { nullable: true })
  @UseGuards(AuthGuard)
  public async sectionByIds(
    @Args('sectionByIdsInput')
    sectionByIdsInput: SectionByIdsInput,
  ): Promise<SectionType | null> {
    return (await this.sectionService.sectionByIds(sectionByIdsInput)) as any;
  }

  @Mutation(() => SectionType)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async addSection(
    @Args('addSectionInput')
    addSectionInput: AddSectionInput,
  ): Promise<SectionType> {
    return (await this.sectionService.addSection(addSectionInput)) as any;
  }

  @Mutation(() => SectionType)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async editSection(
    @Args('editSectionInput')
    editSectionInput: EditSectionInput,
  ): Promise<SectionType> {
    return (await this.sectionService.editSection(editSectionInput)) as any;
  }

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  @UseGuards(AuthGuard)
  public async deleteSection(
    @Args('deleteSectionInput')
    deleteSectionInput: DeleteSectionInput,
  ): Promise<boolean> {
    return (await this.sectionService.deleteSection(deleteSectionInput)) as any;
  }

  @ResolveField(() => TollType)
  public async fromToll(
    @Parent() tollDistance: SectionType,
  ): Promise<TollType> {
    return (await this.sectionService.toll(tollDistance.fromTollId)) as any;
  }

  @ResolveField(() => TollType)
  public async toToll(@Parent() tollDistance: SectionType): Promise<TollType> {
    return (await this.sectionService.toll(tollDistance.toTollId)) as any;
  }
}
