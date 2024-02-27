import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/redis/redis.service';
import { AuthRedisPrefixes } from './auth-redis-prefixes';
import { SetOptions } from 'redis';

@Injectable()
export class AuthRedisService {
  public constructor(private readonly redisService: RedisService) {}

  private readonly MAX_EMAIL_SIGN_IN_ATTEMPTS = 3;
  private readonly MAX_EMAIL_VERIFICATION_ATTEMPTS = 3;
  private readonly MAX_PASSWORD_RESET_ATTEMPTS = 3;

  public async getSignInWithEmailAttempts(userId: string): Promise<number> {
    const signInWithEmailAttemptsResult = await this.redisService.client.get(
      AuthRedisPrefixes.signInWithEmailAttempts(userId),
    );

    if (signInWithEmailAttemptsResult) {
      const signInWithEmailAttempts = +signInWithEmailAttemptsResult;
      return signInWithEmailAttempts;
    } else {
      const options: SetOptions = {
        EX: 60,
      };
      await this.redisService.client.set(
        AuthRedisPrefixes.signInWithEmailAttempts(userId),
        this.MAX_EMAIL_SIGN_IN_ATTEMPTS,
        options,
      );
      return this.MAX_EMAIL_SIGN_IN_ATTEMPTS;
    }
  }

  public async decrementSignInWithEmailAttempts(userId: string): Promise<void> {
    this.redisService.client.decr(
      AuthRedisPrefixes.signInWithEmailAttempts(userId),
    );
  }

  public async getEmailVerificationAttempts(userId: string): Promise<number> {
    const emailVerificationAttemptsResult = await this.redisService.client.get(
      AuthRedisPrefixes.emailVerificationAttempts(userId),
    );

    if (emailVerificationAttemptsResult) {
      const emailVerificationAttempts = +emailVerificationAttemptsResult;
      return emailVerificationAttempts;
    } else {
      const options: SetOptions = {
        EX: 60,
      };
      await this.redisService.client.set(
        AuthRedisPrefixes.emailVerificationAttempts(userId),
        this.MAX_EMAIL_VERIFICATION_ATTEMPTS,
        options,
      );
      return this.MAX_EMAIL_VERIFICATION_ATTEMPTS;
    }
  }

  public async decrementEmailVerificationAttempts(
    userId: string,
  ): Promise<void> {
    this.redisService.client.decr(
      AuthRedisPrefixes.emailVerificationAttempts(userId),
    );
  }

  public async getPasswordResetAttempts(userId: string): Promise<number> {
    const passwordResetAttemptsResult = await this.redisService.client.get(
      AuthRedisPrefixes.passwordResetAttempts(userId),
    );

    if (passwordResetAttemptsResult) {
      const passwordResetAttempts = +passwordResetAttemptsResult;
      return passwordResetAttempts;
    } else {
      const options: SetOptions = {
        EX: 60,
      };
      await this.redisService.client.set(
        AuthRedisPrefixes.passwordResetAttempts(userId),
        this.MAX_PASSWORD_RESET_ATTEMPTS,
        options,
      );
      return this.MAX_PASSWORD_RESET_ATTEMPTS;
    }
  }

  public async decrementPasswordResetAttempts(userId: string): Promise<void> {
    this.redisService.client.decr(
      AuthRedisPrefixes.passwordResetAttempts(userId),
    );
  }
}
