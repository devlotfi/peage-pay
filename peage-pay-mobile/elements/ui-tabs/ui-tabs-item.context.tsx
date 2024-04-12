import { createContext } from 'react';

export type Variants = 'active' | 'inactive';

interface UIButtonContext {
  variant: Variants;
}

const initialValue: UIButtonContext = {
  variant: 'active',
};

export const UIButtonContext = createContext(initialValue);
