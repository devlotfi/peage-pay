import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { AllowRoles } from 'src/decorators/allow-roles.decorator';
import { TokenErrors } from 'src/token/graphql/token-errors.graphql';
import { TokenService } from 'src/token/token.service';
import { UserErrors } from 'src/user/graphql/user-errors.graphql';
import { UserRolesType } from 'src/user/graphql/user-roles.graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  public constructor(
    private readonly reflector: Reflector,
    private readonly tokenService: TokenService,
  ) {}

  private checkRoles(
    allowedRoles: UserRolesType[],
    userRoles: UserRolesType[],
  ): boolean {
    for (const role of allowedRoles) {
      if (userRoles.indexOf(role) !== -1) {
        return true;
      }
    }
    return false;
  }

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

    const allowedRoles = this.reflector.get(AllowRoles, context.getHandler());
    if (!allowedRoles) {
      return true;
    }

    const allowed = this.checkRoles(allowedRoles, payload.userRoles);
    if (!allowed) {
      throw new GraphQLError(UserErrors.INSUFFICIENT_PRIVILEGES);
    }

    return true;
  }
}
