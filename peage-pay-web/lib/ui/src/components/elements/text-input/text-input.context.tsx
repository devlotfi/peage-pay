import { createContext } from 'react';

interface TextInputContext {
  variant: string;
}

const initialValue: TextInputContext = {
  variant: 'edge-100',
};

export const TextInputContext = createContext(initialValue);
