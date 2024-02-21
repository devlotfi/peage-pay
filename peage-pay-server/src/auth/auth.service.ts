import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { SignUpWithEmailInput } from './input/sign-up-with-email.input';
import { GraphQLError } from 'graphql';

@Injectable()
export class AuthService {
  public constructor(private readonly databaseService: DatabaseService) {}

  public async signUpWithEmail(
    signUpWithEmailInput: SignUpWithEmailInput,
  ): Promise<boolean> {
    return this.databaseService.$transaction(async (prisma) => {
      const existingUser = await prisma.emailAuthMethod.findFirst({
        where: {
          email: signUpWithEmailInput.email,
        },
      });
      if (existingUser) {
        throw new GraphQLError('User exists');
      }

      const user = await prisma.baseUser.create({
        data: {
          firstName: signUpWithEmailInput.firstName,
          lastName: signUpWithEmailInput.lastName,
          birthDate: signUpWithEmailInput.birthDate,
          gender: signUpWithEmailInput.gender,

          user: {
            create: {},
          },
        },
      });

      console.log(user);

      return true;
    });
  }
}
