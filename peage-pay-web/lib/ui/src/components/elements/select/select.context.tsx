import { createContext } from 'react';

interface SelectContext {
  variant: string;
}

const initialValue: SelectContext = {
  variant: 'edge-100',
};

export const SelectContext = createContext(initialValue);
