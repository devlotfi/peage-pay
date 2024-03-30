import { createContext } from 'react';

type Variants =
  | 'primary'
  | 'success'
  | 'error'
  | 'warning'
  | 'base-100'
  | 'base-200';

interface UIButtonContext {
  variant: Variants;
}

const initialValue: UIButtonContext = {
  variant: 'primary',
};

export const UIButtonContext = createContext(initialValue);
