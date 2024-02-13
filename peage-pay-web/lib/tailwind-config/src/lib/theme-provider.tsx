import { PropsWithChildren } from 'react';
import './global.css';

/* eslint-disable-next-line */
export interface ThemeProviderProps {}

export function ThemeProvider({ children }: PropsWithChildren) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default ThemeProvider;
