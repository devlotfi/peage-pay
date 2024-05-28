import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Response } from 'express';

export const GraphqlResponse = createParamDecorator(
  (data: unknown, context: ExecutionContext): Response => {
    const { res } = GqlExecutionContext.create(context).getContext();

    return res;
  },
);
