import { Query, Resolver } from '@nestjs/graphql';
import { TripService } from './trip.service';
import { TripType } from './graphql/trip.gql';
import { ContextAccessTokenPayload } from 'src/shared/decorators/context-access-token-payload.decorator';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';

@Resolver()
export class TripResolver {
  public constructor(private readonly tripService: TripService) {}

  @Query(() => [TripType])
  @UseGuards(AuthGuard)
  public async tripList(
    @ContextAccessTokenPayload() userAccessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.tripService.tripList(userAccessTokenPayload);
  }
}
