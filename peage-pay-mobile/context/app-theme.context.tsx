import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { AppTheme } from '../theme/types/app-theme.type';
import { LightTheme } from '../theme/themes/light.theme';
import { AppThemesEnum } from '../theme/types/app-themes-enum.type';
import { DarkTheme } from '../theme/themes/dark.theme';
import { useColorScheme } from 'react-native';

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
  const colorScheme = useColorScheme();

  const setTheme = (theme: AppThemesEnum) => {
    if (theme === AppThemesEnum.DARK) {
      setStateTheme(DarkTheme);
    } else if (theme === AppThemesEnum.LIGHT) {
      setStateTheme(LightTheme);
    }
  };

  useEffect(() => {
    if (colorScheme === 'light') {
      setTheme(AppThemesEnum.LIGHT);
    } else {
      setTheme(AppThemesEnum.DARK);
    }
  }, [colorScheme]);

  return (
    <AppThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
};
