import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { TicketService } from './ticket.service';
import { ContextAccessTokenPayload } from 'src/shared/decorators/context-access-token-payload.decorator';
import { AutomaticGateAccessTokenPayload } from 'src/automatic-gate/types/automatic-gate-access-token-payload.type';
import { TicketType } from './graphql/ticket.gql';
import { UseGuards } from '@nestjs/common';
import { AutomaticGateAuthGuard } from 'src/shared/guards/automatic-gate-auth.guard';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { BaseUserRolesType } from 'src/user/graphql/base-user-roles.gql';
import { IdInput } from 'src/shared/graphql/id-input.gql';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';
import { TollService } from 'src/toll/toll.service';

@Resolver(() => TicketType)
export class TicketResolver {
  public constructor(
    private readonly ticketService: TicketService,
    private readonly tollService: TollService,
  ) {}

  @Mutation(() => TicketType)
  @UseGuards(AutomaticGateAuthGuard)
  public async generateTicket(
    @ContextAccessTokenPayload()
    automaticGateAccessTokenPayload: AutomaticGateAccessTokenPayload,
  ) {
    return await this.ticketService.generateTicket(
      automaticGateAccessTokenPayload,
    );
  }

  @Query(() => TicketType)
  @AllowRoles([BaseUserRolesType.GATE_ADMIN])
  @UseGuards(AuthGuard)
  public async ticketInfo(
    @Args('ticketInfoInput') ticketInfoInput: IdInput,
    @ContextAccessTokenPayload()
    accessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.ticketService.ticketInfo(
      ticketInfoInput,
      accessTokenPayload,
    );
  }

  @Mutation(() => TicketType)
  @AllowRoles([BaseUserRolesType.GATE_ADMIN])
  @UseGuards(AuthGuard)
  public async validateTicket(
    @Args('validateTicketInput') validateTicketInput: IdInput,
    @ContextAccessTokenPayload()
    accessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.ticketService.validateTicket(
      validateTicketInput,
      accessTokenPayload,
    );
  }

  @ResolveField(() => TicketType)
  public async entryToll(@Parent() ticket: TicketType) {
    return await this.tollService.tollById({ id: ticket.entryTollId });
  }

  @ResolveField(() => TicketType, { nullable: true })
  public async exitToll(@Parent() ticket: TicketType) {
    if (ticket.exitTollId) {
      return await this.tollService.tollById({ id: ticket.exitTollId });
    } else {
      return null;
    }
  }
}
