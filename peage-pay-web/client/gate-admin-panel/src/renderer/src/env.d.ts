/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly RENDERER_VITE_SERVER_URL: string;
  readonly RENDERER_VITE_AUTH_COMMON_CLIENT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
