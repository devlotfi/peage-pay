import * as SecureStore from 'expo-secure-store';
import { SecureStoreKeys } from '../constants/secure-store-keys';

export abstract class UserAuthUtils {
  public static setRefreshToken = async (refreshToken: string) => {
    await SecureStore.setItemAsync(SecureStoreKeys.REFRESH_TOKEN, refreshToken);
  };
  public static clearRefreshToken = async () => {
    await SecureStore.deleteItemAsync(SecureStoreKeys.REFRESH_TOKEN);
  };
  public static getRefreshToken = async () => {
    return await SecureStore.getItemAsync(SecureStoreKeys.REFRESH_TOKEN);
  };
  public static getRefreshTokenSync = () => {
    return SecureStore.getItem(SecureStoreKeys.REFRESH_TOKEN);
  };
}
