import { AppTheme } from "../types/app-theme.type";
import { AppThemesEnum } from "../types/app-themes-enum.type";

export const DarkTheme: AppTheme = {
  type: AppThemesEnum.DARK,

  "base-100": "#333c4d",
  "base-200": "#1d2636",
  "base-300": "#161e22",
  "base-content": "#e0eaf0",

  "edge-100": "#abc0cc",
  "edge-200": "#4c596e",
  "edge-300": "#abc0cc",

  "primary-100": "#2aa8ee",
  "primary-200": "#2280b3",
  "primary-transparent": "#2aa8ee50",

  "success-100": "#49d77d",
  "success-200": "#3ba161",
  "success-transparent": "#49d77d50",

  "error-100": "#e04a4a",
  "error-200": "#9b3434",
  "error-transparent": "#e04a4a50",

  "warning-100": "#f3de24",
  "warning-200": "#8f8100",
  "warning-transparent": "#c2af0050",

  "color-content": "#ffffff",
};
