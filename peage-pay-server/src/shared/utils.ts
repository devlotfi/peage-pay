import { hash } from 'bcrypt';

export abstract class Utils {
  public static async hashString(password: string): Promise<string> {
    const hashedPassword = hash(password, 10);
    return hashedPassword;
  }
}
