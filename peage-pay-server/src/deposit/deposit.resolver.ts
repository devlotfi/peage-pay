import { Query, Resolver } from '@nestjs/graphql';
import { DepositService } from './deposit.service';
import { DepositType } from './graphql/deposit.gql';
import { ContextAccessTokenPayload } from 'src/shared/decorators/context-access-token-payload.decorator';
import { UserAccessTokenPayload } from 'src/auth/types/user-access-token-payload.type';

@Resolver()
export class DepositResolver {
  public constructor(private readonly depositService: DepositService) {}

  @Query(() => [DepositType])
  public async depositList(
    @ContextAccessTokenPayload() userAccessTokenPayload: UserAccessTokenPayload,
  ) {
    return await this.depositService.depositList(userAccessTokenPayload);
  }
}
