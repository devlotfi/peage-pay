import * as SecureStore from 'expo-secure-store';
import { SecureStoreKeys } from '../constants/secure-store-keys';

export class Utils {
  private static formatSingleDigit(num: number): string {
    if (num < 10) {
      return `0${num}`;
    }
    return `${num}`;
  }

  public static formatDateTime(date: Date): string {
    return `${date.getFullYear()}/${Utils.formatSingleDigit(
      date.getMonth(),
    )}/${Utils.formatSingleDigit(date.getDay())} ${Utils.formatSingleDigit(
      date.getHours(),
    )}:${Utils.formatSingleDigit(date.getMinutes())}`;
  }

  public static formatDate(date: Date): string {
    return `${date.getFullYear()}/${Utils.formatSingleDigit(
      date.getMonth(),
    )}/${Utils.formatSingleDigit(date.getDay())}`;
  }

  public static formatTime(date: Date): string {
    return `${Utils.formatSingleDigit(
      date.getHours(),
    )}:${Utils.formatSingleDigit(date.getMinutes())}`;
  }

  public static createDateFromTimeString(time: string): Date {
    const [hours, minutes] = time.split(':').map(Number);

    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);

    return date;
  }
}

export abstract class UserAuthUtils {
  public static setAccessToken = (accessToken: string) => {
    AuthInitializedStatus.setAccessToken(accessToken);
  };
  public static clearAccessToken = async () => {
    AuthInitializedStatus.setAccessToken(null);
  };
  public static getAccessToken = () => {
    return AuthInitializedStatus.accessToken;
  };

  public static setRefreshToken = (refreshToken: string) => {
    SecureStore.setItem(SecureStoreKeys.REFRESH_TOKEN, refreshToken);
  };
  public static clearRefreshToken = async () => {
    await SecureStore.deleteItemAsync(SecureStoreKeys.REFRESH_TOKEN);
  };
  public static getRefreshToken = () => {
    return SecureStore.getItem(SecureStoreKeys.REFRESH_TOKEN);
  };
}

export abstract class AuthInitializedStatus {
  private static _accessToken: string | null = null;

  public static get accessToken(): string | null {
    return AuthInitializedStatus._accessToken;
  }

  public static setAccessToken(value: string | null) {
    AuthInitializedStatus._accessToken = value;
  }
}
