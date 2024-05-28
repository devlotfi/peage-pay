import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';

export const GraphqlRequest = createParamDecorator(
  (data: unknown, context: ExecutionContext): Request => {
    const { req } = GqlExecutionContext.create(context).getContext();

    return req;
  },
);
