export class AuthRedisPrefixes {
  public static signInWithEmailAttempts(userId: string): string {
    return `SIGN_IN_WITH_EMAIL_ATTEMPTS:${userId}`;
  }

  public static emailVerificationAttempts(userId: string): string {
    return `EMAIL_VERIFICATION_ATTEMPTS:${userId}`;
  }

  public static passwordResetAttempts(userId: string): string {
    return `PASSWORD_RESET_ATTEMPTS:${userId}`;
  }
}
