import { genSalt, hash } from 'bcrypt';

export abstract class Utils {
  public static async hashString(password: string): Promise<string> {
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    return hashedPassword;
  }
}
