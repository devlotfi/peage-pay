import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { SignUpWithEmailInput } from './input/sign-up-with-email.input';
import { GraphQLError } from 'graphql';
import { genSalt, hash } from 'bcrypt';
import { EmailService } from 'src/email/email.service';
import { AuthErrors } from './auth-errors';

@Injectable()
export class AuthService {
  public constructor(
    private readonly databaseService: DatabaseService,
    private readonly emailService: EmailService,
  ) {}

  public async hashPassword(password: string): Promise<string> {
    const salt = await genSalt();
    const hashedPassword = hash(password, salt);
    return hashedPassword;
  }

  public async signUpWithEmail(
    signUpWithEmailInput: SignUpWithEmailInput,
  ): Promise<boolean> {
    const existingUser = await this.databaseService.emailAuthMethod.findFirst({
      where: {
        email: signUpWithEmailInput.email,
      },
    });
    console.log(existingUser);

    if (existingUser) {
      throw new GraphQLError(AuthErrors.USER_WITH_EMAIL_EXISTS);
    }

    const hashedPassword = await this.hashPassword(
      signUpWithEmailInput.password,
    );

    /* const baseUser = await this.databaseService.baseUser.create({
      data: {
        firstName: signUpWithEmailInput.firstName,
        lastName: signUpWithEmailInput.lastName,
        birthDate: signUpWithEmailInput.birthDate,
        gender: signUpWithEmailInput.gender,
        user: {
          create: {},
        },
        authMethod: {
          create: {
            emailAuthMethod: {
              create: {
                email: signUpWithEmailInput.email,
                passwordHash: hashedPassword,
              },
            },
          },
        },
      },
      include: {
        authMethod: {
          include: {
            emailAuthMethod: true,
          },
        },
      },
    });

    console.log(baseUser); */

    await this.emailService.sendVerificationEmail(
      'baseUser.id',
      'baseUser.authMethod?.emailAuthMethod?.email as any',
      'lol',
    );

    return true;
  }
}
