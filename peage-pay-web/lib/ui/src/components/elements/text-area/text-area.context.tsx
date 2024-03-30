import { createContext } from 'react';

interface TextAreaContext {
  variant: string;
}

const initialValue: TextAreaContext = {
  variant: 'edge-100',
};

export const TextAreaContext = createContext(initialValue);
