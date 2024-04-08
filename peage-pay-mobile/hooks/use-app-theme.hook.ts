import { useContext } from 'react';
import { AppThemeContext } from '../context/app-theme.context';

export const useAppTheme = () => {
  const { theme, setTheme } = useContext(AppThemeContext);

  return { theme, setTheme };
};
