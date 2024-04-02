import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { GraphQLError } from 'graphql';
import { TokenErrors } from 'src/token/graphql/token-errors.gql';

export const ContextAccessTokenPayload = createParamDecorator(
  async (data: unknown, context: ExecutionContext) => {
    const { req } = GqlExecutionContext.create(context).getContext();

    const authorizarion: string = req.headers['authorization'];
    if (!authorizarion) {
      throw new GraphQLError(TokenErrors.ACCESS_TOKEN_NOT_PROVIDED);
    }

    const accessToken: string = authorizarion.split(' ')[1];
    const jwtService = new JwtService();
    const payload = jwtService.decode(accessToken);

    return payload;
  },
);
