import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export class Utils {
  public static cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  public static renderFieldOptions = <T extends { [key: string]: string }>(
    enumObj: T,
  ) => {
    return (
      <>
        {Object.keys(enumObj).map((key) => {
          const keyValue = enumObj[key as keyof T];
          return (
            <option key={keyValue} value={keyValue}>
              {keyValue}
            </option>
          );
        })}
      </>
    );
  };
}
