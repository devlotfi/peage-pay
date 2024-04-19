import { NodeJS } from 'node';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
      EXPO_PUBLIC_SERVER_URL: string;
      EXPO_PUBLIC_WS_SERVER_URL: string;
    }
  }
}
