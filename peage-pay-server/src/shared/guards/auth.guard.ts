import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { AllowRoles } from 'src/shared/decorators/allow-roles.decorator';
import { TokenErrors } from 'src/token/graphql/token-errors.gql';
import { UserTokenService } from 'src/token/user-token.service';
import { BaseUserErrors } from 'src/user/graphql/base-user-errors.gql';
import { BaseUserRolesType } from 'src/user/graphql/base-user-roles.gql';

@Injectable()
export class AuthGuard implements CanActivate {
  public constructor(
    private readonly reflector: Reflector,
    private readonly tokenService: UserTokenService,
  ) {}

  private checkRoles(
    allowedRoles: BaseUserRolesType[],
    userRoles: BaseUserRolesType[],
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
      throw new GraphQLError(BaseUserErrors.INSUFFICIENT_PRIVILEGES);
    }

    return true;
  }
}
