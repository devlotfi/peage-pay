import { AppThemesEnum } from "./app-themes-enum.type";

export interface AppTheme {
  type: AppThemesEnum;

  "base-100": string;
  "base-200": string;
  "base-300": string;
  "base-content": string;

  "edge-100": string;
  "edge-200": string;
  "edge-300": string;

  "primary-100": string;
  "primary-200": string;
  "primary-transparent": string;

  "success-100": string;
  "success-200": string;
  "success-transparent": string;

  "error-100": string;
  "error-200": string;
  "error-transparent": string;

  "warning-100": string;
  "warning-200": string;
  "warning-transparent": string;

  "color-content": string;
}
