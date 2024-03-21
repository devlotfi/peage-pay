import { PropsWithChildren, createContext, useState } from 'react';
import './global.css';
import { ThemeLocalStorageKeys } from './constants/theme-local-storage-keys';

export enum ThemesEnum {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

interface ThemeContext {
  theme: ThemesEnum;

  setLightTheme: () => void;
  setDarkTheme: () => void;
}

const initialValue: ThemeContext = {
  theme: ThemesEnum.LIGHT,

  setLightTheme: () => {
    return;
  },
  setDarkTheme: () => {
    return;
  },
};

const setThemeDom = (theme: ThemesEnum) => {
  const htmlTag: HTMLBaseElement | null =
    document.querySelector('#theme-provider');

  if (htmlTag) {
    htmlTag.dataset.theme = theme;
  }
};

const initTheme = (): ThemesEnum | undefined => {
  const themeLocal: ThemesEnum | null = localStorage.getItem(
    ThemeLocalStorageKeys.THEME,
  ) as ThemesEnum;

  if (themeLocal) {
    setThemeDom(themeLocal);
    return themeLocal;
  } else {
    const htmlTag: HTMLBaseElement | null =
      document.querySelector('#theme-provider');

    if (htmlTag) {
      return htmlTag.dataset.theme as ThemesEnum;
    }
  }
};

export const ThemeContext = createContext(initialValue);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState(initTheme() || ThemesEnum.LIGHT);

  const setLightTheme = () => {
    setTheme(ThemesEnum.LIGHT);
    setThemeDom(ThemesEnum.LIGHT);
    localStorage.setItem(ThemeLocalStorageKeys.THEME, ThemesEnum.LIGHT);
  };

  const setDarkTheme = () => {
    setTheme(ThemesEnum.DARK);
    setThemeDom(ThemesEnum.DARK);
    localStorage.setItem(ThemeLocalStorageKeys.THEME, ThemesEnum.DARK);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setLightTheme,
        setDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
