import { genSalt, hash } from 'bcrypt';

export abstract class Utils {
  public static async hashString(password: string): Promise<string> {
    const salt = await genSalt();
    const hashedPassword = hash(password, salt);
    return hashedPassword;
  }
}
