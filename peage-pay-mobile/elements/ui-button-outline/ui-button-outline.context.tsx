import { createContext } from 'react';

export type Variants =
  | 'primary'
  | 'success'
  | 'error'
  | 'warning'
  | 'edge-100'
  | 'edge-200';

export type IconPosition = 'left' | 'right';

interface UIButtonOutlineContext {
  variant: Variants;
  iconPosition: IconPosition;
}

const initialValue: UIButtonOutlineContext = {
  variant: 'primary',
  iconPosition: 'left',
};

export const UIButtonOutlineContext = createContext(initialValue);
