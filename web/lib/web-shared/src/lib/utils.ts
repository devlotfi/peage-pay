import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export class Utils {
  public static cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
  }
}
