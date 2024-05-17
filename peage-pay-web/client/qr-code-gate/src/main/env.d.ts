/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MAIN_VITE_BAUD_RATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
