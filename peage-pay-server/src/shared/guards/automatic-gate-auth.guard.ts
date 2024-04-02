import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { AutomaticGateTokenService } from 'src/token/automatic-gate-token.service';
import { TokenErrors } from 'src/token/graphql/token-errors.gql';

@Injectable()
export class AutomaticGateAuthGuard implements CanActivate {
  public constructor(
    private readonly tokenService: AutomaticGateTokenService,
  ) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const { req } = GqlExecutionContext.create(context).getContext();

    const authorizarion: string = req.headers['authorization'];
    if (!authorizarion) {
      throw new GraphQLError(TokenErrors.ACCESS_TOKEN_NOT_PROVIDED);
    }

    const accessToken: string = authorizarion.split(' ')[1];
    const { payload, valid } =
      await this.tokenService.checkAccessToken(accessToken);
    if (!valid || !payload) {
      throw new GraphQLError(TokenErrors.INVALID_ACCESS_TOKEN);
    }

    return true;
  }
}
