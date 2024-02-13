import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

type Theme = 'LIGHT' | 'DARK';

export class Utils {
  public static cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
  }

  public static getCurrentTheme(): Theme | undefined {
    const htmlTag = document.querySelector('html');

    if (htmlTag) {
      return htmlTag.dataset.theme as Theme;
    }
  }

  public static setTheme(theme: Theme): void {
    const htmlTag = document.querySelector('html');

    if (htmlTag) {
      htmlTag.dataset.theme = theme;
    }
  }
}
