import { LocalStorageKeys, SessionStorageKeys } from '@peage-pay-web/constants';

export abstract class UserAuthUtils {
  public static setRefreshToken = (refreshToken: string) => {
    localStorage.setItem(LocalStorageKeys.REFRESH_TOKEN, refreshToken);
  };
  public static clearRefreshToken = () => {
    localStorage.removeItem(LocalStorageKeys.REFRESH_TOKEN);
  };
  public static getRefreshToken = () => {
    return localStorage.getItem(LocalStorageKeys.REFRESH_TOKEN);
  };
  public static setAccessToken = (accessToken: string) => {
    sessionStorage.setItem(SessionStorageKeys.ACCESS_TOKEN, accessToken);
  };
  public static getAccessToken = () => {
    return sessionStorage.getItem(SessionStorageKeys.ACCESS_TOKEN);
  };
  public static clearAccessToken = () => {
    sessionStorage.removeItem(SessionStorageKeys.ACCESS_TOKEN);
  };
}
