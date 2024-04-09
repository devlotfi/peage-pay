import { createContext } from 'react';

export type Variants =
  | 'primary'
  | 'success'
  | 'error'
  | 'warning'
  | 'edge-100'
  | 'edge-200';

interface UITextInpuContext {
  variant: Variants;
}

const initialValue: UITextInpuContext = {
  variant: 'primary',
};

export const UITextInputContext = createContext(initialValue);
