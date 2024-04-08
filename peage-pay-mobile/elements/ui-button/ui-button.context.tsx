import { createContext } from 'react';

export type Variants =
  | 'primary'
  | 'success'
  | 'error'
  | 'warning'
  | 'base-100'
  | 'base-200';

export type IconPosition = 'left' | 'right';

interface UIButtonContext {
  variant: Variants;
  iconPosition: IconPosition;
}

const initialValue: UIButtonContext = {
  variant: 'primary',
  iconPosition: 'left',
};

export const UIButtonContext = createContext(initialValue);
