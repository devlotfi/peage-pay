import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { TripService } from './trip.service';
import { TripType } from './graphql/trip.gql';
import { ContextAccessTokenPayload } from 'src/shared/decorators/context-access-token-payload.decorator';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { TripPriceInput } from './input/trip-price.input.gql';
import { TripPriceResult } from './result/trip-price.result.gql';
import { AutomaticGateAuthGuard } from 'src/shared/guards/automatic-gate-auth.guard';
import { RfidInput } from 'src/shared/graphql/rfid-input.gql';
import { AutomaticGateAccessTokenPayload } from 'src/automatic-gate/types/automatic-gate-access-token-payload.type';
import { TollType } from 'src/toll/graphql/toll.gql';
import { TollService } from 'src/toll/toll.service';

@Resolver(() => TripType)
export class TripResolver {
  public constructor(
    private readonly tripService: TripService,
    private readonly tollService: TollService,
  ) {}

  @Query(() => [TripType])
  @UseGuards(AuthGuard)
  public async tripList(
    @ContextAccessTokenPayload() userAccessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.tripService.tripList(userAccessTokenPayload);
  }

  @Query(() => TripPriceResult)
  @UseGuards(AuthGuard)
  public async tripPrice(
    @Args('tripPriceInput') tripPriceInput: TripPriceInput,
  ) {
    return await this.tripService.tripPrice(tripPriceInput);
  }

  @Mutation(() => Boolean)
  @UseGuards(AutomaticGateAuthGuard)
  public async startTripRfid(
    @Args('startTripRfidInput') startTripRfidInput: RfidInput,
    @ContextAccessTokenPayload()
    automaticGateAccessTokenPayload: AutomaticGateAccessTokenPayload,
  ) {
    return await this.tripService.startTripRfid(
      startTripRfidInput,
      automaticGateAccessTokenPayload,
    );
  }

  @Mutation(() => Boolean)
  @UseGuards(AutomaticGateAuthGuard)
  public async endTripRfid(
    @Args('endTripRfidInput') endTripRfidInput: RfidInput,
    @ContextAccessTokenPayload()
    automaticGateAccessTokenPayload: AutomaticGateAccessTokenPayload,
  ) {
    return await this.tripService.endTripRfid(
      endTripRfidInput,
      automaticGateAccessTokenPayload,
    );
  }

  @ResolveField(() => TollType)
  public async entryToll(@Parent() trip: TripType) {
    return await this.tollService.tollById({ id: trip.entryTollId });
  }

  @ResolveField(() => TollType)
  public async exitToll(@Parent() trip: TripType) {
    if (trip.exitTollId) {
      return await this.tollService.tollById({ id: trip.exitTollId });
    }
    return null;
  }
}
