import { PropsWithChildren, createContext, useState } from "react";
import { AppTheme } from "../types/app-theme.type";
import { LightTheme } from "../themes/light.theme";
import { AppThemesEnum } from "../types/app-themes-enum.type";
import { DarkTheme } from "../themes/dark.theme";

interface AppThemeContext {
  theme: AppTheme;
  setTheme: (theme: AppThemesEnum) => void;
}

const initialValue: AppThemeContext = {
  theme: LightTheme,
  setTheme: () => {},
};

export const AppThemeContext = createContext(initialValue);

export const AppThemeProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [theme, setStateTheme] = useState<AppTheme>(initialValue.theme);

  const setTheme = (theme: AppThemesEnum) => {
    if (theme === AppThemesEnum.DARK) {
      setStateTheme(DarkTheme);
    } else if (theme === AppThemesEnum.LIGHT) {
      setStateTheme(LightTheme);
    }
  };

  return (
    <AppThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
};
