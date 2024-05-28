import { Catch } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { PrismaErrors } from '../graphql/prisma-errors.gql';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements GqlExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError) {
    switch (exception.code) {
      case 'P2025':
        return new GraphQLError(PrismaErrors.NOT_FOUND);
      case 'P2002':
        return new GraphQLError(PrismaErrors.UNIQUE_CONSTRAINT_VIOLATION);
      case 'P2003':
        return new GraphQLError(PrismaErrors.FOREIGN_KEY_CONSTRAINT_VIOLATION);
      default:
        return new GraphQLError(PrismaErrors.INTERNAL_SERVER_ERROR);
    }
  }
}
