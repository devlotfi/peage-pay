import { createContext } from 'react';

type Variants =
  | 'primary'
  | 'success'
  | 'error'
  | 'warning'
  | 'edge-100'
  | 'edge-200';

interface UIButtonOutlineContext {
  variant: Variants;
}

const initialValue: UIButtonOutlineContext = {
  variant: 'primary',
};

export const UIButtonOutlineContext = createContext(initialValue);
