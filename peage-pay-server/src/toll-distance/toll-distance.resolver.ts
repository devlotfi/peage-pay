import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TollDistanceService } from './toll-distance.service';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { BaseUserRolesType } from 'src/base-user/graphql/base-user-roles.gql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { GenerateTollDistancesInput } from './input/generate-toll-distances.input.gql';

@Resolver()
export class TollDistanceResolver {
  public constructor(
    private readonly tollDistanceService: TollDistanceService,
  ) {}

  @Mutation(() => Boolean)
  @AllowRoles([BaseUserRolesType.GENERAL_ADMIN])
  public async generateTollDistances(
    @Args('generateTollDistancesInput')
    generateTollDistancesInput: GenerateTollDistancesInput,
  ): Promise<boolean> {
    return await this.tollDistanceService.generateTollDistances(
      generateTollDistancesInput,
    );
  }
}
