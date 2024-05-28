import { genSalt, hash } from 'bcrypt';
import { createHash } from 'crypto';

export abstract class Utils {
  public static async hashString(str: string): Promise<string> {
    const salt = await genSalt(10);
    const hashedPassword = await hash(str, salt);
    return hashedPassword;
  }

  public static async hashStringStatic(str: string): Promise<string> {
    const hash = createHash('sha256');
    hash.update(str);
    return hash.digest('hex');
  }
}
