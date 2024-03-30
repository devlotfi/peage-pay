import { createContext } from 'react';

type Variants = 'primary' | 'success' | 'error' | 'warning';

interface UIHeadingContext {
  variant: Variants;
  size: number;
}

const initialValue: UIHeadingContext = {
  variant: 'primary',
  size: 19,
};

export const UIHeadingContext = createContext(initialValue);
