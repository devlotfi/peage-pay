import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export class Utils {
  public static cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
  }

  public static createDateFromTime(time: string): Date {
    const [hours, minutes] = time.split(":").map(Number);

    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);

    return date;
  }

  public static isLaterTime(
    time1: string | undefined,
    time2: string | undefined
  ): boolean {
    if (!time1 || !time2) {
      return false;
    }

    const [hours1, minutes1] = time1.split(":").map(Number);
    const [hours2, minutes2] = time2.split(":").map(Number);

    const date1 = new Date();
    date1.setHours(hours1);
    date1.setMinutes(minutes1);

    const date2 = new Date();
    date2.setHours(hours2);
    date2.setMinutes(minutes2);

    return date1 > date2;
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  public static renderFieldOptions = <T extends { [key: string]: string }>(
    enumObj: T
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
